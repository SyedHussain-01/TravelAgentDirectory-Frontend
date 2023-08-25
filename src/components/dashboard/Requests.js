import React, { useEffect, useState } from "react";
import { Box, useTheme, Typography, Button, Snackbar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/dashboard/Header";
import Modal from "@mui/material/Modal";
import { getCustomPackage, proceedPackage } from "../../functions/packages";

const Requests = () => {
  const theme = useTheme();
  const [packages, setPackages] = useState([]);
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [description, setDescription] = useState("");
  const [packageId, setPackageId] = useState(null);
  const [userId, setUserId] = useState(null);
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "packageName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "duration",
      headerName: "Duration(days)",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "tour_fee",
      headerName: "Tour Fee",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "destinations",
      headerName: "Destinations",
      flex: 1,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params.row.destinations.join(", "),
    },
  ];

  const getCustomPackages = async () => {
    try {
      const result = await getCustomPackage();
      setPackages(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomPackages();
  }, []);

  const handleRowClick = (params) => {
    setDescription(params.row.description);
    setPackageId(params.id);
    setUserId(params.row.user_id)
    console.log(params)
    setOpen(true);
  };

  const submitPackage = async () => {
    try {
      const agent_id = localStorage.getItem("user_id");
      const result = await proceedPackage(agent_id, packageId, userId);
      if (result) {
        setUpdate(true);
        setTimeout(() => {
          setUpdate(false);
          window.location.href = `/Dashboard/Packages`;
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRowId = (row) => row._id;

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box m="20px">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="transition-modal-title" variant="h4" component="h2">
            Description
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1em",
            }}
          >
            <Button type="button" color="secondary" variant="contained" onClick={submitPackage} >
              Proceed Request
            </Button>
          </div>
        </Box>
      </Modal>
      <Snackbar
        open={update}
        autoHideDuration={100} // Time in milliseconds for how long the snackbar should be open
        message="Request successfully accepted"
      />
      <Header title="REQUESTS" subtitle="Package Requests by Users" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={packages}
          columns={columns}
          getRowId={getRowId}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
};

export default Requests;
