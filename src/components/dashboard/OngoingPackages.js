import React, { useEffect, useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Modal from "@mui/material/Modal";
import Header from "../../components/dashboard/Header";
import { getPackage } from "../../functions/packages";
import { getSingleAgent } from "../../functions/travelAgents";

const OngoingPackages = () => {
  const theme = useTheme();
  const [packages, setPackages] = useState([]);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "_id", headerName: "ID", flex: 1, hide: true },
    {
      field: "user_id",
      headerName: "User Id",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "package_id",
      headerName: "Package Id",
      cellClassName: "name-column--cell",
      flex: 1,
    },
  ];

  const getAgentData = async () => {
    try {
      const result = await getSingleAgent();
      console.log(result.data.ongoing_packages)
      setPackages(result.data.ongoing_packages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgentData();
  }, []);

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
        />
      </Box>
    </Box>
  );
};

export default OngoingPackages;
