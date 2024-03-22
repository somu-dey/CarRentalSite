import React from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import logo1 from "../images/6368592.jpg";
import logo2 from "../images/Mobile-login-Cristina.jpg";
function SignupDash() {
  const navigate = useNavigate();
  return (
    <div
      className="container-fluid d-flex"
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <img src={logo1} style={{ width: "100%" }} alt="" />
        </div>
        <Button
          className="btn  postad"
          //   style={{ backgroundColor: "#007CFF", }}
          // radius="sm"
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
          style={{
            backgroundColor: "#002CFF",
            color: "white",
            // height: "px",
            borderRadius: "20px",
            // marginLeft: "1rem",
          }}
        >
          User Register
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "realtive",
          width: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <img src={logo2} style={{ width: "100%" }} alt="" />
        </div>
        <Button
          className="btn  postad"
          // radius="sm"
          onClick={(e) => {
            e.preventDefault();
            navigate("/agentsignup");
          }}
          style={{
            backgroundColor: "#038673",
            color: "white",
            // height: "px",
            borderRadius: "20px",
            // marginLeft: "1rem",
          }}
        >
          Agent Register
        </Button>
      </div>
    </div>
  );
}

export default SignupDash;
