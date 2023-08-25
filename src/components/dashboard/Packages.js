import React, { useEffect, useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Modal from "@mui/material/Modal";
import Header from "../../components/dashboard/Header";
import { getPackage } from "../../functions/packages";

const Packages = () => {
  const theme = useTheme();
  const [packages, setPackages] = useState([]);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
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
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "tour_fee",
      headerName: "Tour Fee",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "destinations",
      headerName: "Destinations",
      flex: 1,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params.row.destinations.join(", "),
    },
  ];

  const getPackages = async () => {
    try {
      const id = localStorage.getItem("user_id");
      const result = await getPackage(id);
      setPackages(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPackages();
  }, []);

  const handleRowClick = (params) => {
    setDescription(params.row.description)
    setOpen(true);
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
        </Box>
      </Modal>
      <Header title="PACKAGES" subtitle="Packages posted by Agent" />
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

export default Packages;
