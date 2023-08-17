import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import airplane from "./../airplane.jpg";
export default function Agent1pkg() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>
              <b>
                READY <br></br>TO TAKE <br></br>OFF?
              </b>
            </h1>
            <h6>
              <p>Turn your extra space into next opportunity</p>
            </h6>
          </div>
          <div className="col">
            <img src={airplane} alt="Image 4" />
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Description</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
              width: "70%",
              marginLeft: "15%",
              marginTop: "30px",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Package 1</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the ....
              </p>
            </div>
          </div>
        </div>
    </>
  );
}
