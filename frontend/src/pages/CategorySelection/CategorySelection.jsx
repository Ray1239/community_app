import BottomNavbar from "../../components/BottomNavbar";
import styles from "./categorySelection.module.css";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const CategorySelection = ({donationType, handleFoodType, selectedId, updateDonationMeta}) => {
  const prevSelectedIdRef = useRef();
  useEffect(() => {
    if (selectedId && selectedId !== prevSelectedIdRef.current) {
      updateDonationMeta({ ngo: selectedId });
      prevSelectedIdRef.current = selectedId;
    }
  }, [selectedId, updateDonationMeta]);
  return (
    <>
      <DonateFoodNavbar link="/donationType"/>
      <BottomNavbar />

      <div className={styles.main}>
        <h1>Select the Category</h1>
        <div className={styles.image_section}>
          <Link to="/foodDetails">
            <img src='/images/cooked-food.png' alt="Cooked-Food" onClick={() => handleFoodType('type', 'Cooked-Food')}/>
          </Link>
          <Link to="/foodDetails">
            <img src='/images/raw-food.png' alt="Raw-Food" onClick={() => handleFoodType('type', 'Raw-Food')}/>
          </Link>
          <Link to="/foodDetails">
            <img src='/images/packed-food.png' alt="Packed-Food" onClick={() => handleFoodType('type', 'Packed-Food')}/>
          </Link>
        </div>
      </div>

      <style jsx global>
        {`
          .App {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default CategorySelection;
