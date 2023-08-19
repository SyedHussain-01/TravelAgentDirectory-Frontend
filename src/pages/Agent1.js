import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPackage } from "../functions/packages";

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
      {data &&
        data.map((item) => {
          return (
            <Link to="/User/Agent1/Agent1pkg">
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
                    <h5 className="card-title">{item.packageName}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {item.destinations.map((destination) => {
                        return (
                          <>
                            <span>{destination}</span>
                            <span>{' -> '}</span>
                          </>
                        );
                      })}
                    </h6>
                    <p className="card-text">
                      {item.description.slice(0,200)} ....
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
}
