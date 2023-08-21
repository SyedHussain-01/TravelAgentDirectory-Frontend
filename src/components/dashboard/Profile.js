import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Autocomplete,
  FormHelperText,
  Snackbar,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import { getSingleAgent, updateAgent } from "../../functions/travelAgents";
import Modal from "@mui/material/Modal";
import bcrypyt from "bcryptjs";
var cityList = require("../../common/data/cities.json");

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [pakCities, setPakCities] = useState([]);
  const [details, setDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentPasword, setCurrentPassword] = useState("");
  const [verifyPass, setVerifyPass] = useState(false);
  const [update, setUpdate] = useState(false);

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("invalid email"),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    pass: yup.string(),
    city: yup.string(),
    agency_name: yup.string(),
  });

  const encryptPass = async (pass) => {
    const saltRounds = Number(process.env.REACT_APP_HASH_ROUNDS);
    try {
      const hashedPass = await bcrypyt.hash(pass, saltRounds);
      return hashedPass;
    } catch (error) {
      console.log("err=> ", error);
    }
  };

  const handleFormSubmit = async (values) => {
    try {
      if (currentPasword == "" || !verifyPass) {
        delete values["pass"];
      } else {
        values["pass"] = await encryptPass(currentPasword);
      }
      const result = await updateAgent(values);
      if (result) {
        setUpdate(true);
        setTimeout(() => {
          setUpdate(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDetails = async () => {
    try {
      const result = await getSingleAgent();
      setDetails(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  useEffect(() => {
    getDetails();
  }, []);

  const getCities = () => {
    cityList.map((item, index) => {
      pakCities.push({
        label: item.city,
        id: index,
      });
    });
  };

  const handlePasswordFocus = () => {
    setOpen(true);
  };

  const handlePassword = async () => {
    const userInputPass = currentPasword;
    const encryptedPassword = details.pass;
    try {
      const verify = await bcrypyt.compare(userInputPass, encryptedPassword);
      setVerifyPass(verify);
      setOpen(false);
    } catch (error) {
      console.log("error in verification=> ", error);
    }
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  if (!details) {
    // Wait until details are fetched
    return null;
  }

  return (
    <Box m="30px">
      <Header title="AGENT PROFILE" subtitle="Edit your information" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          name: details?.name || "",
          email: details?.email || "",
          phone: details?.phone || "",
          pass: "",
          city: details?.city || "",
          agency_name: details?.agency_name || "",
        }}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Snackbar
                open={update}
                autoHideDuration={100} // Time in milliseconds for how long the snackbar should be open
                message="Profile successfully updated"
              />
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Current Password"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <Box display="flex" justifyContent="center" mt="20px">
                    <Button
                      onClick={handlePassword}
                      type="button"
                      color="secondary"
                      variant="contained"
                    >
                      Confirm Current Password
                    </Button>
                  </Box>
                </Box>
              </Modal>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                label="Password"
                autoComplete="new-password"
                onClick={!verifyPass ? handlePasswordFocus : () => {}}
                onBlur={handleBlur}
                onChange={(e) => setFieldValue("pass", e.target.value)}
                value={currentPasword}
                name="pass"
                error={!!touched.pass && !!errors.pass}
                helperText={touched.pass && errors.pass}
                sx={{ gridColumn: "span 2" }}
              />
              {verifyPass && (
                <FormHelperText>
                  Password Verified, Now you can update your passowrd
                </FormHelperText>
              )}
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Agency Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.agency_name}
                name="agency_name"
                error={!!touched.agency_name && !!errors.agency_name}
                helperText={touched.agency_name && errors.agency_name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 1" }}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onBlur={handleBlur}
                onChange={(event, newValue) => {
                  setFieldValue("city", newValue ? newValue.label : "");
                }}
                autoComplete="off"
                value={values.city}
                options={pakCities}
                sx={{ gridColumn: "span 1" }}
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                renderInput={(params) => (
                  <TextField
                    autoComplete="off"
                    inputProps={{
                      ...params.inputProps,
                    }}
                    {...params}
                    label="City"
                  />
                )}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Update Profile
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
