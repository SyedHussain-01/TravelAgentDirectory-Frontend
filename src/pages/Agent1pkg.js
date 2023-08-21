import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import airplane from "./new1.png";
import { Link, useParams } from "react-router-dom";
import { getSinglePackage, proceedPackage } from "../functions/packages";
import { Button, Snackbar } from "@mui/material";

export default function Agent1pkg() {
  const [data, setData] = useState(null);
  const { id, packageid } = useParams();
  const [update, setUpdate] = useState(false);

  const getData = async () => {
    try {
      const result = await getSinglePackage(packageid);
      setData(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitPackage = async () => {
    try {
      const result = await proceedPackage(id, packageid);
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

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <div
        className="rectangle"
        style={{
          width: "90%",
          height: "110%",
          boxShadow: "10px 10px rgba(0,0,0,0.2)",
          backgroundColor: "whitesmoke",
          marginLeft: "5%",
          marginTop: "1px",
          marginBottom: "20px",
          border: "0.1px solid rgba(0,0,0,0.2)",
        }}
      >
        <Snackbar
          open={update}
          autoHideDuration={100} // Time in milliseconds for how long the snackbar should be open
          message="Package Proceeded, Enjoy your journey!!!!"
        />
        <div className="container text-center" style={{ marginTop: "5%" }}>
          <div className="row">
            <div className="col">
              <h1
                style={{
                  textTransform: "uppercase",
                  fontWeight: "800",
                  marginTop: "25%",
                }}
              >
                <b>
                  READY <br></br>TO TAKE <br></br>OFF?
                </b>
              </h1>
              <h6>
                <p style={{ textTransform: "uppercase", fontWeight: "800" }}>
                  Turn your extra space into next opportunity
                </p>
              </h6>
            </div>
            <div className="col">
              <img
                src={airplane}
                alt="Image 4"
                style={{ width: "500px", height: "540px", marginTop: "0%" }}
              />
            </div>
            <div className="col" style={{}}>
              <h1 style={{ textTransform: "uppercase", fontWeight: "800" }}>
                Book Flight Tickets
              </h1>
              <h6 style={{ textTransform: "uppercase", fontWeight: "500" }}>
                New features for travelling
              </h6>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "50px",
                  marginTop: "20px",
                  // borderRadius: "20px",
                  boxShadow: "10px 10px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "700",
                    backgroundColor: "#000",
                    color: "#fff",
                    opacity: "0.5",
                  }}
                >
                  <h5
                    className="card-title"
                    style={{ textTransform: "uppercase", fontWeight: "800" }}
                  >
                    Description
                  </h5>
                  <p className="card-text">
                    {`${data?.description}`.slice(0, 200)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="card"
            style={{
              backgroundColor: "transparent",
              width: "70%",
              marginLeft: "15%",
              marginBottom: "20px",

              boxShadow: "10px 10px rgba(0,0,0,0.2)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxShadow: "10px 10px rgba(0,0,0,0.2)",

                backgroundColor: "#e1e5d9",
                borderRadius: "2px",
              }}
            >
              <h5
                className="text"
                style={{
                  textTransform: "uppercase",
                  fontWeight: "900",

                  paddingLeft: "10px",
                  marginBottom: "30px",
                }}
              >
                Package Information
              </h5>
              <br></br>
              <p
                className="card-text"
                style={{ textTransform: "uppercase", fontWeight: "800" }}
              >
                <div class="container text-center">
                  <div className="row">
                    <div className="col">Destination: </div>
                    <div className="col-6">
                      {data.destinations?.map((item) => {
                        return <span>{item} - </span>;
                      })}
                    </div>
                    <div className="col"></div>
                  </div>

                  <div className="row" style={{ marginTop: "60px" }}>
                    <div className="col">
                      Package Name: {data.packageName && data.packageName}
                    </div>
                    <div className="col-5">
                      Duration: {data.duration && data.duration} days
                    </div>
                    <div className="col">
                      Fees: {data.tour_fee && data.tour_fee}
                    </div>
                    <Button
                      type="button"
                      color="secondary"
                      variant="contained"
                      onClick={submitPackage}
                    >
                      Proceed
                    </Button>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
