// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Agentsignup from "./carrental/Agentsignup";
import SignupDash from "./carrental/SignupDash";
import Landing from "./components/Landing";
// import Adproduct from "./components/AdCar";
// import AdBike from "./components/AdMobile";
// import { userAuthContextProvider } from "./context/UserAuthContext";
import MainAds from "./components/MainAds";
import About from "./HeaderNav/About";
// import ProductDesc from "./components/ProductDesc";
import AdCar from "./PostAd/AdCar";
import AdBike from "./PostAd/AdBike";
import MyWishlist from "./HeaderNav/MyWishlist";
import ChatUsers from "./chats/ChatUsers";
import AdMobile from "./PostAd/AdMobile";
import AdElectronics from "./PostAd/AdElectronics";
import MyAds from "./components/MyAds";
import ProductDetails from "./components/ProductDetails";
import { AnimatePresence } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
import ForgotPassword from "./components/ForgotPass";
import Contact from "./HeaderNav/Contact";
import Chat from "../src/chats/Chat";
import AdminPanel from "../src/admin/AdminPanel";
import Admin from "../src/admin/Admin";
import UserChats from "./admin/UserChats";
import LoginDash from "./carrental/LoginDash";
import Rentcar from "./carrental/Rentcar";
import BookedCars from "./admin/BookedCars";
function App() {
  const location = useLocation();
  return (
    // <Router>

    <NextUIProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Landing />} />
          <Route path="/logindash" element={<LoginDash />} />
          <Route path="/signupdash" element={<SignupDash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rentcar" element={<Rentcar />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/mainads" element={<MainAds />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adcar" element={<AdCar />} />
          <Route path="/admobile" element={<AdMobile />} />
          <Route path="/adelectronic" element={<AdElectronics />} />
          <Route path="/adbike" element={<AdBike />} />
          <Route path="/myads" element={<MyAds />} />
          <Route path="/mywishlist" element={<MyWishlist />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chatUsers" element={<ChatUsers />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/agentsignup" element={<Agentsignup />} />
          <Route path="/userChats" element={<UserChats />} />
          <Route path="/bookedCars" element={<BookedCars />} />

          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </AnimatePresence>
    </NextUIProvider>
    // </Router>
  );
}

export default App;
