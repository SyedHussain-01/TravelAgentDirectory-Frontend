import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Login() {
  return (
    <>

    
      <div className="container mt-5 pt-5" style={{marginLeft:"20%"}}>
        <div className="row">
          <div className="col-12 col-sm8 col-md-6 m-auto">
            <div className="card border-0 shadow" style={{width:"300px"}}>
              <div className="card-body">
            <div className="logo" style={{marginLeft:"40%"}}> <AccountCircleIcon sx={{ fontSize: 60 }} /></div>
                <form action="">
                  
                  <input
                    type="email"
                    className="form-control my-4 py-2"
                    id=""
                    placeholder="Email"
                  />

                  <input
                    type="password"
                    className="form-control my-4 py-2"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </form>
                <div className="text-center">
             <Link to ="/Signin"> <button className="btn btn-primary">Sign Up</button></Link>  
                
                <button className="btn btn-primary" style={{marginLeft:"20px"}}>Login</button>
              </div>
            </div>
          </div></div>
        </div>
      </div>

    </>
  );
}
