import React, { useState } from "react";
// import "./Adproduct.css";
import { useNavigate } from "react-router-dom";
import Sample from "../components/Sample";
import { toast, Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { database } from "../components/firebase";
// import { collection, addDoc } from "firebase/firestore";
import Adcar from "../images/7506746.jpg";
import { database } from "../components/firebase";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
function Rentcar() {
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();
  if (localStorage.getItem("user")) {
    var userExists = true;
  } else {
    // imgUrl = false;
    userExists = false;
  }
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    model: "",
    fuel: "",
    transmission: "",
    // startDate: "",
    // endDate: "",
    // adTitle: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userExists) {
      if (startDate && endDate) {
        toast.success(" Your Car Booking is Successfull !!", {
          position: "top-center",
          duration: "600",
        });
        const allAdsCollectionRef = collection(database, "BookedCars");
        await addDoc(allAdsCollectionRef, {
          email: user?.email,
          model: formData.model,
          fuel: formData.fuel,
          startDate: startDate,
          endDate: endDate,
        });
        navigate("/");
      } else {
        toast.error(" Fill The Required Fields ! ", {
          position: "top-center",
        });
      }
    } else {
      toast.error("You Must Login First !!");
      navigate("/login");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, type: "linear" }}
    >
      <div
        className="d-flex admaindiv"
        style={{
          justifyContent: "center",
          flexDirection: "column",
          // padding: "5rem",
        }}
      >
        {loading ? (
          <Sample />
        ) : (
          <div>
            <Toaster position="top-center" reverseOrder={false} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#007DFE",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h2 style={{ color: "white", marginTop: "8px" }}>
                Fill All The Neccessary Details
              </h2>
            </div>

            <div
              // className="d"
              style={{
                // marginTop: px",
                // height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundImage: { Adcar },
                // backgroundPosition: "center",
                // backgroundRepeat: "repeat",
              }}
            >
              <img src={Adcar} alt="" />
            </div>
            {/* <h2>Post Your Ad</h2> */}
            <form>
              <label>
                Model:
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", height: "30px" }}
                >
                  <option value="" disabled>
                    Select a Model
                  </option>
                  <option value="BMW">BMW</option>
                  <option value="Rolls Royce">Rolls Royce</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Audi">Audi</option>
                </select>
              </label>

              <label>
                Fuel Type:
                <select
                  name="fuel"
                  value={formData.fuel}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", height: "30px" }}
                >
                  <option value="" disabled>
                    Select fuel type
                  </option>
                  <option value="Diesel">Diesel</option>
                  <option value="Petrol">Petrol</option>
                  <option value="CNG">CNG</option>
                  <option value="EV">EV</option>
                </select>
              </label>
              <label>
                Transmission Type:
                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", height: "30px" }}
                >
                  <option value="" disabled>
                    Select transmission type
                  </option>
                  <option value="BMW">Automatic</option>
                  <option value="Rolls Royce">Manual</option>
                  <option value="Rolls Royce">Hybrid</option>
                </select>
              </label>

              {/* <div> */}
              <label>Start Date:</label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Select start date"
                dateFormat="dd/MM/yyyy"
              />

              <label>End Date:</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="Select end date"
              />
              {/* </div> */}
              <button
                className="btn postadbtn"
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  borderRadius: "20px",
                  marginTop: "2rem",
                  backgroundColor: "#007DFE",
                }}
              >
                Rent Car Now
              </button>
            </form>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Rentcar;
