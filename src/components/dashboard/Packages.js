import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "./mockdata";
import Header from "../../components/dashboard/Header";
import { getPackage } from "../../functions/packages";

const Packages = () => {
  const theme = useTheme();
  const [packages, setPackages] = useState([])
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
      headerName: "Duration",
      type: "number",
      flex: 1,
    },
    {
      field: "tour_fee",
      headerName: "Tour Fee",
      type: "number",
      flex: 1,
    },
  ];

  const getPackages = async () => {
    try {
        const id = localStorage.getItem('user_id')
        const result = await getPackage(id)
        setPackages(result?.data?.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getPackages();
  },[])

  const getRowId = (row) => row._id;

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
        <DataGrid rows={packages} columns={columns} getRowId={getRowId} />
      </Box>
    </Box>
  );
};

export default Packages;
