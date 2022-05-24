import React from "react";
import SoldOut from "./soldout/SoldOut";
import styles from "./tools.module.scss";
const Tools = () => {
  return (
    <div className={styles.tools}>
      <h1 className={styles.tools__h1}>Some of our amazing business tools</h1>

      <div className={styles.tools__flex}>
        <div className={styles.tools__textDiv}>
          <p className={styles.tools__textbg}>POINT OF SALE</p>
          <p>INVENTORY MANAGEMEN</p>
          <p>MENU MANAGEMEN</p>
          <p>ORDER MANAGEMENT</p>
          <p>RESERVATION & BOOKING</p>
          <p>Ticketing</p>
          <p>CRM</p>
        </div>
        <div className={styles.tools__cardDiv}>
          <SoldOut />
        </div>
      </div>
    </div>
  );
};

export default Tools;
