import styles from "./deliverSelection.module.css";
import BottomNavbar from "../../components/BottomNavbar";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../../components/Button";
import axios from "axios"; // Import axios for API calls

const DeliverSelection = ({ foodMeta, updateDonationMeta, foodData }) => {
  const [isModalOpen, setModalState] = useState(false);
  console.log("Food Meta:", foodMeta);
  console.log("Food data: ", foodData);


  const toggleModal = async (selfDel) => {
    setModalState((state) => !state);
    updateDonationMeta({ delivery: selfDel });

    // Send donation data to the server
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/foodDonation`, 
        {
          foodDetails: foodData, // The food details (assuming foodMeta contains the required data)
          donationMeta: {
            location: foodMeta.location, // Make sure to pull these values from the correct place
            contact: foodMeta.contact,
            date: foodMeta.date,
            time: foodMeta.time,
            delivery: selfDel,
          },
        },
        { withCredentials: true } // Include credentials for session management
      );
      console.log("Donation successful:", data);
    } catch (error) {
      console.error("Error saving donation:", error);
    }
  };

  return (
    <>
      <BottomNavbar />
      <div className={styles.main}>
        <div className={styles.upper}>
          <div className={styles.img}>
            <img src="./images/illus2.png" alt="Illustration" />
          </div>
          <p>Would you be delivering or do you need a Pickup?</p>
        </div>

        <div className={styles.button_section}>
          <button className={styles.selfBtn} onClick={() => toggleModal(true)}>Self Delivery</button>
          <button onClick={() => toggleModal(false)} className={styles.pickupBtn}>
            Pick-Up
          </button>
        </div>
        {isModalOpen && (
          <div className={styles.modal_overlay}>
            <div className={styles.modal_container}>
              <IoIosCheckmarkCircle className={styles.icon} />
              <p>Pickup Request service sent successfully!</p>
              <p>You will be notified soon</p>
              <Button text="Okay" link="/" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DeliverSelection;