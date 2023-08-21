import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { signup } from "../functions/authorization";
import bg1 from "../bg66.jpg";

function Signin() {
  const [state, setState] = useState({
    name: "",
    email: "",
    pass: "",
    phone: null,
    city: "",
    date_of_birth: "",
    user_type: 1,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const data = {
        name: state.name,
        email: state.email,
        pass: state.pass,
        phone: state.phone,
        city: state.city,
        date_of_birth: state.date_of_birth,
        user_type: state.user_type,
      };
      const result = await signup(data);
      if (result) {
        setSuccess(true);
      }
      console.log(data)
    } catch (error) {
      console.log("error=> ", error);
      setError(true);
    }
  };

  const fields = [
    { type: "text", placeholder: "Name", name: "name" },
    { type: "email", placeholder: "Email", name: "email" },
    { type: "password", placeholder: "Password", name: "pass" },
    { type: "tel", placeholder: "Phone", name: "phone" },
    { type: "text", placeholder: "City", name: "city" },
    { type: "date", placeholder: "Date Of Birth", name: "date_of_birth" },
  ];

  return (
    <> <div className="row align-items-center" style={{         
      backgroundImage: `url(${bg1})`,
      backgroundSize: "cover",
      marginLeft: "0%",
      padding: "0%",
      width: "100%",
      backgroundPosition: "cover",
      height: "50vw",
     }}><div className="col">
      {error && <p>Failed to Sign Up!!! Please Try Again</p>}
      {success && <Navigate to="/" replace={true} />}
     
            <div className="card border-0 shadow" style={{ width: "300px", 
                  width: "400px",
                  backdropFilter:"blur(1px)",
                  backgroundColor: "rgba(0,0,0,0.5",
                  
                  marginLeft:"35%",
                  borderRadius:"30px",
                 
                }} >
              <div className="card-body"  style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    marginTop: "0%",
                    borderRadius:"30px",
                    
                  }}
                >
                <div className="logo" style={{ marginLeft: "40%" }}>
                  <AccountCircleIcon sx={{ fontSize: 60 ,color: "rgba(202,202,202)"}} />
                </div>
                <form onSubmit={signUp}>
                  {fields.map((e) => {
                    return (
                      <input
                        type={e.type}
                        className="form-control my-4 py-2"
                        id=""
                        name={e.name}
                        placeholder={e.placeholder}
                        onChange={(event) => {
                          setState({
                            ...state,
                            [event.target.name]: event.target.value,
                          });
                        }}
                      />
                    );
                  })}
                  <select defaultValue={0} onChange={(event)=>{
                    setState({
                      ...state,
                      user_type: Number(event.target.value),
                    });
                  }} >
                    <option value={0}>Agent</option>
                    <option value={1}>Traveller</option>
                  </select>
                  <div className="text-center">
                    <button type="submit" className="btn btn-danger">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Signin;