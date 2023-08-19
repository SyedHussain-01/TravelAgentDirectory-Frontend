import React, { useState, useEffect } from "react";
import img from "./../mbq.jpg";
import { Link } from "react-router-dom";
import { getAgencies } from "../functions/travelAgents";

export default function User() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const result = await getAgencies();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>
        <div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            style={{ width: "70%", marginLeft: "15%" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner" style={{ marginTop: "10px" }}>
              <div className="carousel-item active">
                <img src={img} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <nav className="navbar bg-body-tertiary" style={{ marginTop: "50px" }}>
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Travel Agents</span>
          </div>
        </nav>
        <div>
          <div className="container text-center">
            <div className="row">
              {data?.data && data.data.map((item) => {
                return (
                  <div className="col-sm-4 d-flex justify-content-center align-items-center">
                    <div
                      className="card"
                      style={{ width: "18rem", marginTop: "20px" }}
                    >
                      <img src={img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.agency_name}</h5>
                        <p className="card-text">
                          <div>Owner: {item.name}</div>
                          <div>Contact: {item.phone}</div>
                        </p>
                        <Link to={`/User/${item._id}`}>
                          <button className="btn btn-primary">
                            View Packages
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <nav className="navbar bg-body-tertiary" style={{ marginTop: "50px" }}>
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Travel Agents</span>
          </div>
        </nav>
      </>
    </div>
  );
}
