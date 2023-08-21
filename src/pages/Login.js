import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Navigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { signin } from "../functions/authorization";
import bg1 from "../bg66.jpg";
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
        setSuccess(true);
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
      {/* <div
        className="bg-image"
        style={{
          backgroundImage: `url(${bg})`,
          filter: 'blur(2px)',
          backgroundSize: "cover",
          margin: "0",
          padding: "0",

          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "50vw",
        }}
      >

</div> */}

      <div
        class="row align-items-center"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          marginLeft: "0%",
          padding: "0%",
          width: "100%",
          backgroundPosition: "center",
          height: "50vw",
         
        }}
      >
        {/* <div class="col-3"></div> */}
        <div class="col">
          <div>
            {error && <p>Failed to Sign Up!!! Please Try Again</p>}
            {success && <Navigate to="/" replace={true} />}
            <div className="container " style={{ }}>
              <div
                className="card border-o shadow text-center"
                style={{
                  width: "400px",
                  backdropFilter:"blur(1px)",
                  backgroundColor: "rgba(0,0,0,0.5",
                  height: "40vh",
                  marginLeft:"35%",
                  borderRadius:"30px",
                 
                }}
              >
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    marginTop: "0%",
                    borderRadius:"30px",
                    
                  }}
                >
                  <div className="logo" style={{}}>
                    {" "}
                    <AccountCircleIcon
                      sx={{ fontSize: 60, color: "rgba(202,202,202)" }}
                    />
                  </div>
                  <form onSubmit={signIn}>
                    {fields.map((e) => {
                      return (
                        //
                        <input
                          style={{
                            backgroundColor: "rgba(0 ,0 ,0 ,0.5)",
                            placeholderColor: "white",
                          }}
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
                        <button type="button" className="btn btn-danger">
                          Sign Up
                        </button>
                      </Link>
                      <button
                        className="btn btn-danger"
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
      </div>
    </>
  );
}
