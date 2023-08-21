import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPackage } from "../functions/packages";
import "./agentstyles.css";
import bg from "./ap.jpg";

export default function Agent1() {
  const [data, setData] = useState(null);
  const { id } = useParams();

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
              style={{ backgroundColor: "#0a0a5b" }}
            >
              <span
                className="mb-2"
                style={{ marginLeft: "45%", backgroundColor: "navyblue" }}
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
          <h1
            className="text-center"
            style={{
              margin: "60px",
              textTransform: "uppercase",
              fontWeight: "800",
            }}
          >
            {" "}
            PACKAGES
          </h1>
          {console.log(data)}
          {data && data.map((item)=>{
            return(
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
                    style={{ textTransform: "uppercase", fontWeight: "800" }}
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
                        {`${item.description}`.slice(0,200)}
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
            )
          })}
          
        </div>
      </div>
    </>
  );
}
