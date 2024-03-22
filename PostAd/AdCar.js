import React, { useState } from "react";
import "./Adproduct.css";
import { useNavigate } from "react-router-dom";
import Sample from "../components/Sample";
import { toast, Toaster } from "react-hot-toast";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { database } from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";
import Adcar from "../images/Adcar.jpg";
import { storage } from "../components/firebase";
import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function AdCar() {
  const [loading, setLoading] = useState(false);
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  const [formData, setFormData] = useState({
    brand: "",
    year: "",
    fuel: "",
    transmission: "",
    kmDriven: "",
    owners: "",
    adTitle: "",
    description: "",
    price: "",
    location: "",
    name: "",
    phoneNumber: "",
  });
  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData({
      ...formData,
      photos: files,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.brand ||
      formData.adTitle ||
      formData.description ||
      formData.fuel ||
      formData.kmDriven ||
      formData.location ||
      formData.owners ||
      formData.phoneNumber ||
      formData.price ||
      formData.year ||
      formData.photos
      // formData.photos.length > 0
    ) {
      try {
        const auth = getAuth();
        // Upload images to Firebase Storage
        setLoading(true);
        const imageRef = ref(
          storage,
          `users/5yhcqSi4uybVltX1ttQ41SLVcc32/images/${
            formData.name
          }_${Date.now()}`
        );

        await uploadBytes(imageRef, formData.photos[0]);
        const imageUrl = await getDownloadURL(imageRef);

        const userCarAdsCollection = collection(
          database,
          "UserAds",
          "5yhcqSi4uybVltX1ttQ41SLVcc32",
          "CarAds"
        );
        const formDataWithoutPhotos = { ...formData };
        delete formDataWithoutPhotos.photos;
        // const username = auth.currentUser.displayName;
        // const docRef = await addDoc(userCarAdsCollection, {
        // uid: auth.currentUser.uid,
        // imageUrl,
        // ...formDataWithoutPhotos,
        // username,
        // uid: "5yhcqSi4uybVltX1ttQ41SLVcc32",
        // category: "CarAds",
        // transmission: formData.transmission || "", // Assuming transmission is optional
        // });
        // all ads collection-------------------------------------------------------------------------------------------------------
        const allAdsCollectionRef = collection(database, "AllData");
        const allAds = await addDoc(allAdsCollectionRef, {
          imageUrl,
          ...formDataWithoutPhotos,
          uid: "5yhcqSi4uybVltX1ttQ41SLVcc32",
          // username,
        });
        // -----------------------------------------------------------------------------------------------------------------------------
        if (!allAds.id) {
          throw new Error("Failed to submit data to Firestore");
        }

        toast.success("Ad posted successfully", {
          position: "top-center",
          duration: "1000",
        });
        console.log("Data submitted successfully");
        // Reset the form data
        setFormData({
          brand: "",
          year: "",
          fuel: "",
          transmission: "",
          kmDriven: "",
          owners: "",
          adTitle: "",
          description: "",
          price: "",
          location: "",
          name: "",
          phoneNumber: "",
          photos: [],
        });
        navigate("/");
      } catch (error) {
        console.error("Error submitting data:", error.message);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please Fill In All The Fields!", {
        position: "top-center",
        duration: "600",
      });
      console.error("Please Fill In All The Fields!");
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
                backgroundColor: "#ff4f5a",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h2 style={{ color: "white", marginTop: "8px" }}>
                Add New Car For Rent
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
                  name="brand"
                  value={formData.brand}
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
                Vehicle Number:
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
              </label>

              <label>
                Seating Capacity:
                <input
                  type="text"
                  name="fuel"
                  value={formData.fuel}
                  onChange={handleChange}
                />
              </label>

              <label>
                Rent Per Day:
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </label>
              <label>
                Upload Photos:
                <input
                  type="file"
                  name="photos"
                  onChange={handleFileChange}
                  accept="image/*"
                  multiple
                />
              </label>
              {/* <div> */}
              {/* <label>Start Date:</label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Select start date"
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
              /> */}
              {/* </div> */}
              <button
                className="btn postadbtn"
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                style={{ borderRadius: "20px" }}
              >
                Post Now
              </button>
            </form>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default AdCar;
