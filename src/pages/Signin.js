import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { signup } from "./../functions/authorization";

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
    <>
      {error && <p>Failed to Sign Up!!! Please Try Again</p>}
      {success && <Navigate to="/" replace={true} />}
      <div className="container mt-5 pt-5" style={{ marginLeft: "20%" }}>
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card border-0 shadow" style={{ width: "300px" }}>
              <div className="card-body">
                <div className="logo" style={{ marginLeft: "40%" }}>
                  <AccountCircleIcon sx={{ fontSize: 60 }} />
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
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
