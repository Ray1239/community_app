// ConfirmFoodDetails.js
import styles from "./confirmFoodDetails.module.css";
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import Button from "../../components/Button";
import { useEffect } from "react";

const ConfirmFoodDetails = ({ foodData, donationType, donationMeta, updateDonationMeta }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateDonationMeta({ [name]: value }); // Update donationMeta state
  };

  return (
    <>
      <DonateFoodNavbar link="/foodDetails" />
      <BottomNavbar />
      <div className={styles.main}>
        <p className={styles.heading}>Confirm food details</p>
        <div className={styles.top_section}>
          <div className={styles.left}>
            <p>{foodData.type}</p>
            <p>{foodData.meal}</p>
            <p>{foodData.quantity} servings</p>
          </div>
          <div className={styles.right}>
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
        </div>

        <p className={styles.heading}>Pickup Location</p>
        <div className={styles.input_box}>
          <GoLocation />
          <input
            type="text"
            name="location" // Name to match donationMeta
            value={donationMeta.location} // Bind to state
            onChange={handleInputChange} // Handle change
            placeholder="Sector 15, MIDC Road, Spine City, Pune"
          />
        </div>

        <p className={styles.heading}>Contact Information</p>
        <div className={styles.input_box}>
          <BsTelephone />
          <input
            type="number"
            name="contact" // Name to match donationMeta
            value={donationMeta.contact} // Bind to state
            onChange={handleInputChange} // Handle change
            placeholder="9876383735"
          />
        </div>

        <p className={styles.heading}>By when you can donate</p>
        <div className={styles.input_box}>
          <input
            type="date"
            name="date" // Name to match donationMeta
            value={donationMeta.date} // Bind to state
            onChange={handleInputChange} // Handle change
            placeholder="30-Sep-2021"
          />
        </div>

        <div className={[styles.input_box, styles.bottom_input].join(" ")}>
          <input
            type="time"
            name="time" // Name to match donationMeta
            value={donationMeta.time} // Bind to state
            onChange={handleInputChange} // Handle change
            placeholder="Time"
          />
        </div>

        <div className={styles.guideline}>
          <input type="checkbox" />
          <label>All food donated should be under Guidelines</label>
        </div>
        <div className={styles.btn}>
          <Button text="Post" link="/delivery" />
        </div>
      </div>
    </>
  );
};

export default ConfirmFoodDetails;
