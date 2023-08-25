import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPackage } from "../functions/packages";
import "./agentstyles.css";
import bg from "./ap.jpg";
import styled from "styled-components";
import AddCustomPackage from "./AddCustomPackage";

export default function Agent1() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [active, setActive] = useState(1);

  const getData = async () => {
    try {
      const result = await getPackage(id);
      setData(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container" style={{ backgroundColor: "#fafdff" }}>
        <div>
          {" "}
          <nav className="navbar bg-body-tertiary">
            <div
              className="container-fluid"
              style={{
                backgroundColor: "#0a0a5b",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                className="mb-2"
                style={{
                  backgroundColor: "navyblue",
                }}
              >
                <h1
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "800",
                    color: "white",
                    marginTop: "10px",
                  }}
                >
                  Agent#1
                </h1>
              </span>
            </div>
          </nav>
        </div>

        <div>
          <img
            src={bg}
            style={{
              width: "80%",
              height: "300px",
              marginLeft: "10%",
              marginTop: "1%",
              borderRadius: "20px",
            }}
          ></img>
          <Section id="recommend" style={{ marginTop: "2em" }}>
            <div className="packages">
              <ul>
                <li
                  className={active === 1 ? "active" : ""}
                  onClick={() => setActive(1)}
                  style={{ fontWeight: "900" }}
                >
                  PACKAGES
                </li>
                <li
                  className={active === 2 ? "active" : ""}
                  onClick={() => setActive(2)}
                  style={{ fontWeight: "900" }}
                >
                  PROPOSE CUSTOM PACKAGE
                </li>
              </ul>
            </div>
          </Section>

          {active == 1 ? (
            <>
              <h1
                className="text-center"
                style={{
                  marginTop: "1em",
                  textTransform: "uppercase",
                  fontWeight: "800",
                }}
              >
                PACKAGES
              </h1>
              {data &&
                data.map((item) => {
                  return (
                    <div>
                      <div
                        className="card"
                        style={{
                          width: "90%",
                          marginLeft: "5%",
                          marginTop: "30px",
                          borderRadius: "20px",
                          height: "250px",
                        }}
                      >
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/User/${item.agent_id}/${item._id}`}
                        >
                          <div
                            className="card-body"
                            style={{ backgroundColor: "rgb(0 0 0 / 3%)" }}
                          >
                            <h5
                              className="text-center "
                              style={{
                                textTransform: "uppercase",
                                fontWeight: "800",
                              }}
                            >
                              {item.packageName}
                            </h5>
                            <p className="card-text">
                              <div
                                className="row"
                                style={{
                                  marginTop: "40px",
                                  textTransform: "uppercase",
                                  fontWeight: "800",
                                }}
                              >
                                <div className="col">PACKAGE NAME: </div>
                                <div className="col-6">{item.packageName}</div>
                                <div
                                  className="col"
                                  style={{
                                    backgroundColor: "black",
                                    textTransform: "uppercase",
                                    fontWeight: "800",
                                    color: "white",
                                  }}
                                >
                                  FEES : {item.tour_fee}
                                </div>
                              </div>

                              <div
                                className="row"
                                style={{
                                  marginTop: "60px",
                                  textTransform: "uppercase",
                                  fontWeight: "800",
                                }}
                              >
                                <div className="col">Description:</div>
                                <hr></hr>
                                <div className="col-">
                                  {`${item.description}`.slice(0, 200)}
                                </div>
                                <div className="col">
                                  <div></div>
                                </div>
                              </div>
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </>
          ) : (
            <div>
              <AddCustomPackage />
            </div>
          )}
        </div>
      </div>
    </>
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
