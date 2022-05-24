import React from "react";
import styles from "./banner.module.scss";
// import { banner } from "../../../assets";
import Image from "next/image";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__h1Div}>
        <h1>
          Built for restaurants.
          <br /> Built for you.
        </h1>
        <p>Reach more potential customers with HighTable.</p>
        <p>Make your restaurant one of the varieties for our users. </p>
        <div className={styles.banner__buttonDiv}>
          <button>Get Started</button>
          <button>See Pricing</button>
        </div>
      </div>
      <div className={styles.banner__imageDiv}>
        <Image
          src="/images/Group 5925.png"
          alt="img"
          //  height={100} width={250}
        />
      </div>
    </div>
  );
};

export default Banner;
