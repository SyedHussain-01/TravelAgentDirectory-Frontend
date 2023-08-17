
import React from "react";
import { Link } from "react-router-dom";

export default function Agent1() {
  return (
    <>
      <div>
        {" "}
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Agent 1</span>
            <span>
              <button className='"btn btn-primary"'> Custom Forms</button>
            </span>
          </div>
        </nav>
      </div>

      <Link to="/User/Agent1/Agent1pkg">
        {" "}
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
      </Link>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
        </div>      </div>
    </>
  );
}
