import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Navigate, } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { signin } from "../functions/authorization";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const data = {
        email: state.email,
        pass: state.pass,
      };
      const result = await signin(data);
      if (result) {
        setSuccess(true)
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    } catch (error) {
      console.log("error=> ", error);
      setError(true);
    }
  };

  const fields = [
    { type: "email", placeholder: "Email", name: "email" },
    { type: "password", placeholder: "Password", name: "pass" },
  ];

  return (
    <>
      {error && <p>Failed to Sign Up!!! Please Try Again</p>}
      {success && <Navigate to="/" replace={true} />}
      <div className="container mt-5 pt-5" style={{ marginLeft: "20%" }}>
        <div className="row">
          <div className="col-12 col-sm8 col-md-6 m-auto">
            <div className="card border-0 shadow" style={{ width: "300px" }}>
              <div className="card-body">
                <div className="logo" style={{ marginLeft: "40%" }}>
                  {" "}
                  <AccountCircleIcon sx={{ fontSize: 60 }} />
                </div>
                <form onSubmit={signIn}>
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
                  <div className="text-center">
                    <Link to="/Signup">
                      <button type="button" className="btn btn-primary">
                        Sign Up
                      </button>
                    </Link>
                    <button
                      className="btn btn-primary"
                      style={{ marginLeft: "20px" }}
                      type="submit"
                    >
                      Login
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
