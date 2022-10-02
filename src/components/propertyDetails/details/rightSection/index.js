import React from "react";

//importing styles
import styles from "./styles.module.css";

//importing MUI

import ButtonComponent from "../../../common/button";
import BasicDateRangePicker from "./BasicDateRangePicker";


import displayRazorpay from "../../../razorpay";


const RightSection = () => {
  return (
    <>
    <section 
    id="book-now"
    className={styles["book-now"]}>
      <div
      className={`${styles["row"]} ${styles["border-bottom"]}`}
      >
        <BasicDateRangePicker/>
        {/* <div className={`${styles["col-6"]} ${styles["border-right"]}`}></div>
        <div className={`${styles["col-6"]}`}></div> */}
      </div>
     <div
      className={`${styles["row"]} ${styles["border-bottom"]} ${styles["row-guests"]}`}
      >
        <div className={styles["guests-title"]}>
        Guests
        </div>
        <select
         className={styles["guest-dropdown"]}
        >
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div
      className={`${styles["row"]} ${styles["price"]}`}
      >
        ₹1200 /- Day
      </div>
     
    </section>

     <ButtonComponent

      onClick={displayRazorpay}

     className={styles["book-now-button"]}
     >
     Book now
   </ButtonComponent>
   </>
  );
};

export default RightSection;
