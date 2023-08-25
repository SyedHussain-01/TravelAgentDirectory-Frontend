import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import airplane from "./new1.png";
import { Link, useParams } from "react-router-dom";
import {
  getSinglePackage,
  proceedPackage,
  postComment,
} from "../functions/packages";
import { Button, Snackbar, TextField } from "@mui/material";
import styled from "styled-components";

export default function Agent1pkg() {
  const [data, setData] = useState(null);
  const { id, packageid } = useParams();
  const [update, setUpdate] = useState(false);
  const [comment, setComment] = useState(null);
  const [rating, setRating] = useState(5);

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
      const user_id = localStorage.getItem("user_id")
      const result = await proceedPackage(id, packageid, user_id);
      if (result) {
        setUpdate(true);
        setTimeout(() => {
          setUpdate(false);
          window.location.href = `/User/${data.agent_id}`
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitFeedback = async () => {
    try {
      const result = await postComment(packageid, comment, rating);
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [active, setActive] = useState(1);

  if (!data) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="rectangle"
        style={{
          width: "90%",
          boxShadow: "10px 10px rgba(0,0,0,0.2)",
          backgroundColor: "whitesmoke",
          marginTop: "2em",
          marginBottom: "2em",
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
            <div className="col-sm-4">
              <h1
                style={{
                  textTransform: "uppercase",
                  fontWeight: "800",
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
            <div className="col-sm-4">
              <img
                src={airplane}
                alt="Image 4"
                style={{ width: "400px", height: "240px" }}
              />
            </div>
            <div className="col-sm-4" style={{}}>
              <h1 style={{ textTransform: "uppercase", fontWeight: "800" }}>
                Book Flight Tickets
              </h1>
              <h6 style={{ textTransform: "uppercase", fontWeight: "500" }}>
                New features for travelling
              </h6>
            </div>
          </div>
          {/* Row1 */}
          <div className="row">
            <div
              className="col-sm-12"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="card"
                style={{
                  width: "95%",
                  marginBottom: "2em",
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
                  <p className="card-text">{`${data?.description}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section id="recommend">
          <div className="packages">
            <ul>
              <li
                className={active === 1 ? "active" : ""}
                onClick={() => setActive(1)}
                style={{ fontWeight: "900" }}
              >
                ABOUT
              </li>
              <li
                className={active === 2 ? "active" : ""}
                onClick={() => setActive(2)}
                style={{ fontWeight: "900" }}
              >
                FEEDBACK
              </li>
            </ul>
          </div>
        </Section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {active == 1 ? (
            <div
              className="card"
              style={{
                backgroundColor: "transparent",
                width: "70%",
                marginBottom: "1em",
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
                          return <span>{`${item} - `}</span>;
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
          ) : (
            <div
              className="card"
              style={{
                backgroundColor: "transparent",
                width: "70%",
                marginBottom: "1em",
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
                  }}
                >
                  Commenter Name
                </h5>
                <TextField
                  multiline
                  placeholder="Comment"
                  rows={4}
                  variant="outlined"
                  fullWidth
                  name="description"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  sx={{
                    gridColumn: "span 4",
                    backgroundColor: "white",
                    borderRadius: "12px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "0.6em",
                  }}
                >
                  <Button
                    type="button"
                    color="secondary"
                    variant="contained"
                    onClick={submitFeedback}
                    style={{ backgroundColor: "#8338ec" }}
                  >
                    Proceed
                  </Button>
                </div>
                {data.feedback?.map((item) => {
                  return (
                    <>
                      <h5
                        className="text"
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "900",
                          marginTop: "1em",
                        }}
                      >
                        {item.user_name}
                      </h5>
                      <TextField
                        multiline
                        disabled
                        rows={4}
                        variant="outlined"
                        fullWidth
                        name="description"
                        value={item.comment}
                        sx={{
                          gridColumn: "span 4",
                          backgroundColor: "white",
                          borderRadius: "12px",
                        }}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Section = styled.section`
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
`;
