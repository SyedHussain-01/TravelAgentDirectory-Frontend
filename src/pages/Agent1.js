import React from "react";
import { Link } from "react-router-dom";
import "./agentstyles.css";
import bg from "./ap.jpg";

export default function Agent1() {
  return (
    <><div className="container" style={{backgroundColor:"#fafdff"}}>
      <div >
        {" "}
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid" style={{backgroundColor:"#0a0a5b"}}>
            <span className="mb-2" style={{marginLeft:"45%",backgroundColor:"navyblue"}}><h1 style={{textTransform: "uppercase",
              fontWeight: "800",color:"white",marginTop:"10px"}}>Agent#1</h1></span>
          
          </div>
        </nav>
      </div>

      
        {" "}
        <div>
<img src={bg} style={{width:"80%",height:"300px",marginLeft:"10%",marginTop:"1%",borderRadius:"20px"}}></img>
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
          <div>
          <div
            className="card"
            style={{
              width: "90%",
              marginLeft: "5%",
              marginTop: "30px",
              borderRadius: "20px",
              height:"250px"
            }}
          ><Link style={{ textDecoration: 'none',color:"black" }} to="/User/Agent1/Agent1pkg">
            <div className="card-body" style={{backgroundColor:"rgb(0 0 0 / 3%)"}}>
              <h5 className="text-center " style={{ textTransform: "uppercase", fontWeight: "800" }}>Package # 01</h5>
              <p className="card-text">
            
                  <div className="row"style={{marginTop:"40px",textTransform: "uppercase", fontWeight: "800" }}>
                    <div className="col">PACKAGE NAME: </div>
                    <div className="col-6">XXXXXXXXXX</div>
                    <div className="col" style={{backgroundColor:"black",textTransform: "uppercase", fontWeight: "800" ,color:"white"}}>FEES : 100$</div>
                  </div>

                  <div className="row" style={{ marginTop: "60px" ,textTransform: "uppercase", fontWeight: "800" }}>
                   <div className="col">Description:</div><hr></hr>
                    <div className="col-">lorem Some quick example text to build on the card title and make
                    up the bulk of the card's content.... </div>
                    <div className="col"><div ></div></div>
                  </div>
              </p>
            </div></Link>
          </div>
        </div>
     

      <div>
        <div className="pkg">
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
        </div>{" "}
      </div></div></div>
    </>
  );
}
