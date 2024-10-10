import BottomNavbar from "../../components/BottomNavbar";
import styles from "./donationSelection.module.css";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { Link } from "react-router-dom";
// import Spline from '@splinetool/react-spline';




const DonationSelection = () => {
  return (
    <>

      <DonateFoodNavbar link="/all"/>
      <BottomNavbar />
      {/* <Spline scene="https://prod.spline.design/352KduNGfOGRJauI/scene.splinecode"/>  */}

      <div className={styles.main}>
        <div className={styles.main2} >
          <h1>Online</h1>
          <div className={styles.empty}>

          </div>
        </div>
        <div className={styles.image_section}>
          <Link to="/category">
            <img className={styles.network} src="./images/wifi.png" alt="NGO" />
          </Link>
          <Link to="/category">
            <img className={styles.house}  src="./images/house.png" alt="Hunger" />
          </Link>
        </div>
      </div>
      <div className={styles.text}>
        <h1>You Are Online</h1>
        <p>Waiting For New Donation And Order</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer1}>
          <h6>Few More Donation</h6>
        </div>
        
      </div>

      <style jsx>
        {`
          .App {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default DonationSelection;
