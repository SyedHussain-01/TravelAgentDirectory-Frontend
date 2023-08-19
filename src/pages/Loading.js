import React, { useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export const Loading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000);
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }} >
      <BounceLoader color="#36d7b7" size={200} />
    </div>
  );
};
