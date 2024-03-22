import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logo1.png";
import "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import "./Header.css";
import { Button } from "@nextui-org/react";
// import Modal from "react-modal";
import { toast, Toaster } from "react-hot-toast";
import clogo from "../images/logo-no-background.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [isOverLay, setOverlayVisible] = useState(false);

  // const showOverlay = () => {
  //   setOverlayVisible(true);
  // };
  // const hideOverlay = () => {
  //   setOverlayVisible(false);
  // };

  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     zIndex: "1000",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //     transition: "opacity 2s ease, transform 2s ease",
  //   },
  // };

  const user = JSON.parse(localStorage.getItem("user"));
  // const userId = user.uid;
  // console.log(userId);
  // console.log(user);
  if (localStorage.getItem("user")) {
    var imgUrl = user.image;
    var userExists = true;
    // console.log(userExists);
  } else {
    imgUrl = false;
    userExists = false;
  }
  // console.log(imgUrl);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      localStorage.clear("user");
      navigate("/");

      // imgUrl = undefined;
      // console.log("Sign Out Successful");
      toast.success("Sign Out Successful", {
        position: "top-center",
        // duration: "600",
      });
    } catch (error) {
      console.error("Sign out error:", error.message);
    }
  };

  const handleOptionClick = () => {
    setDropdownOpen(!isDropdownOpen);
    // console.log(isDropdownOpen);
  };

  const postBtnHandler = () => {
    if (userExists) {
      navigate("/mainads");
    } else {
      toast.error("You Must Login First !!", {
        position: "top-center",
        // duration: "600",
      });
    }
  };
  return (
    <div
      className="somu"
      style={{
        // position: "fixed",
        width: "100%",
        boxSizing: "border-box",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // margin: "2rem",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="header">
        <Link to="/">
          <img style={{ height: "4rem" }} className="logo" src={clogo} alt="" />
        </Link>
        <div className="navbar">
          <ul className="listnav ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

            {userExists ? (
              <li
                className="nav-item"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                {/* <Link className="nav-link" to=""> */}
                LogOut
                {/* </Link> */}
              </li>
            ) : (
              ""
            )}
          </ul>
          {!userExists ? (
            <>
              <Button
                className="btn  postad"
                // radius="sm"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/logindash");
                }}
                style={{
                  backgroundColor: "#FA4226",
                  color: "white",
                  // height: "px",
                  borderRadius: "20px",
                  // marginLeft: "1rem",
                }}
              >
                Sign In
              </Button>
              <Button
                className="btn  postad"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signupdash");
                }}
                // radius="sm"
                // onClick={postBtnHandler}
                style={{
                  backgroundColor: "#FA4226",
                  color: "white",
                  // height: "px",
                  borderRadius: "20px",
                  // marginLeft: "1rem",
                }}
              >
                Register
              </Button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
