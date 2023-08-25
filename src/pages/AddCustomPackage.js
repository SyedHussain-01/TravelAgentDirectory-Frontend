import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Autocomplete,
  Snackbar,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./../components/dashboard/Header";
import { addCustomPackage } from "../functions/travelAgents";
import { useParams } from "react-router-dom";
var cityList = require("../common/data/cities.json");

const AddCustomPackage = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [pakCities, setPakCities] = useState([]);
  const [details, setDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const { id } = useParams();

  const checkoutSchema = yup.object().shape({
    destinations: yup
      .array()
      .of(yup.string().required("Destination Points are required"))
      .min(2, "At least 2 names are required")
      .required("required"),
    duration: yup.number().required("required"),
    description: yup.string().required("required"),
    tour_fee: yup.string().required("required"),
  });

  const handleFormSubmit = async (values) => {
    try {
      values["tour_fee"] = `Rs ${String(values.tour_fee)}`;
      const user_id = localStorage.getItem("user_id")
      const packageName = localStorage.getItem("user_name")
      values["user_id"] = user_id;
      values["packageName"] = packageName;
      values["agent_id"] = id
      const result = await addCustomPackage(values);
      if (result) {
        setUpdate(true);
        setTimeout(() => {
          setUpdate(false);
          window.location.reload();
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   const getDetails = async () => {
  //     try {
  //       const result = await getSingleAgent();
  //       setDetails(result?.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    getCities();
  }, []);

  //   useEffect(() => {
  //     getDetails();
  //   }, []);

  const getCities = () => {
    cityList.map((item, index) => {
      pakCities.push({
        label: item.city,
        id: index,
      });
    });
  };

  //   if (!details) {
  //     // Wait until details are fetched
  //     return null;
  //   }

  return (
    <Box m="30px">
      <Header title="PROPOSE CUSTOM PACKAGE" subtitle="Propose Custom Package To Agent" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          destinations: details?.destinations || [],
          duration: details?.duration || "",
          description: details?.description || "",
          tour_fee: details?.tour_fee || "",
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
              gap="20px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Snackbar
                open={update}
                autoHideDuration={100} // Time in milliseconds for how long the snackbar should be open
                message="Package Added"
              />
              <TextField
                name="tour_fee"
                label="Tour Fees"
                type="number" // Use type="number" for inputting numeric values
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: <span>Rs</span>, // Adding the dollar sign
                }}
                value={values.tour_fee}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.fee && !!errors.fee}
                helperText={touched.fee && errors.fee}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                name="duration"
                label="Duration (number of days)"
                type="number"
                variant="outlined"
                fullWidth
                value={values.duration}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.duration && !!errors.duration}
                helperText={touched.duration && errors.duration}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                name="description"
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <Autocomplete
                disablePortal
                multiple
                id="combo-box-demo"
                onBlur={handleBlur}
                onChange={(event, newValue) => {
                  setFieldValue(
                    "destinations",
                    newValue.map((item) => item.label)
                  );
                }}
                autoComplete="off"
                value={values.destinations.map((city) => ({ label: city }))}
                options={pakCities}
                sx={{ gridColumn: "span 2" }}
                error={!!touched.destinations && !!errors.destinations}
                helperText={touched.destinations && errors.destinations}
                renderInput={(params) => (
                  <TextField
                    autoComplete="off"
                    inputProps={{
                      ...params.inputProps,
                    }}
                    {...params}
                    label="Destinations"
                  />
                )}
              />
            </Box>
            <Box display="flex" justifyContent="end" p="20px" >
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddCustomPackage;
