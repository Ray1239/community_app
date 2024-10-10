import BottomNavbar from "../../components/BottomNavbar";
import styles from "./donationSelection.module.css";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
// import { Link } from "react-router-dom";
// import Spline from '@splinetool/react-spline';




const DonationSelection = () => {
  return (
    <>

      <DonateFoodNavbar link="/all"/>
      <BottomNavbar />
      {/* <Spline scene="https://prod.spline.design/352KduNGfOGRJauI/scene.splinecode"/>  */}

      <div className={styles.con}>
        <div className={styles.main}>        
          <div className={styles.left}>
            <h1>ID:3021.</h1>    
            <h1>Pickup Point:</h1>    
            <h5>Lorem ipsum dolor consectetur<br /> adipisicing elit.
            </h5>
            <p>Lorem ipsum, dolor sit amet consectetur !</p>
          </div>

          <div className={styles.right}>    
            <h1>1.00PM-3.00PM</h1>
            <p>View On Map!</p>
          </div>   

        </div>
        <hr />

        <div className={styles.main2}>
            <div className={styles.r-1}>
              <div className={styles.rem}>
                <div className={styles.rem2}>
                  
                </div>
              </div>

              <div className={styles.rem}>
                <div className={styles.rem2}>
                  
                </div>
              </div>

            </div>

            <div className={styles.l-1}>
              <div className={styles.text1}>
                <p>2Kg Rice</p>
              </div>
              <div className={styles.text1}>
                <p>1L Milk </p>
              </div>
            </div>
        </div>
        <hr />

        <div className={styles.main3}>
          <div >
            <button className={styles.btn1} >Reject</button>
          </div>
          <div >
              <button className={styles.btn2}>Accept(5:00)</button>
          </div>

        </div>
        <hr className={styles.hr3} ></hr>
      </div>



      <div className={styles.con}>
        <div className={styles.main}>        
          <div className={styles.left}>
            <h1>ID:3021.</h1>    
            <h1>Pickup Point:</h1>    
            <h5>Lorem ipsum dolor consectetur<br /> adipisicing elit.
            </h5>
            <p>Lorem ipsum, dolor sit amet consectetur !</p>
          </div>

          <div className={styles.right}>    
            <h1>1.00PM-3.00PM</h1>
            <p>View On Map!</p>
          </div>   

        </div>
        <hr />

        <div className={styles.main2}>
            <div className={styles.r-1}>
              <div className={styles.rem}>
                <div className={styles.rem2}>
                  
                </div>
              </div>

              <div className={styles.rem}>
                <div className={styles.rem2}>
                  
                </div>
              </div>

            </div>

            <div className={styles.l-1}>
              <div className={styles.text1}>
                <p>2Kg Rice</p>
              </div>
              <div className={styles.text1}>
                <p>1L Milk </p>
              </div>
            </div>
        </div>
        <hr />

        <div className={styles.main3}>
          <div >
            <button className={styles.btn1} >Reject</button>
          </div>
          <div >
              <button className={styles.btn2}>Accept(5:00)</button>
          </div>

        </div>
        <hr className={styles.hr3} ></hr>
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
