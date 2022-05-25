import React from "react";
// import Image from "next/image";
// import { contactlap, dotcolor } from "../../../assets";
import styles from "./contact.module.scss";
import FormContent from "./formscontent/FormContent";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__bgorange}>
        <div className={styles.contact__h1Div}>
          <h1>
            Contact us for your <br />
            Free Demo
          </h1>
        </div>
        <div className={styles.contact__imgDiv}>
          {/* <Image src="/images/Group 5670.png" alt="img" /> */}
          <img src="/images/Group 5670.png" alt="img" />
          {/* <img src="/images/Group 5670.png" alt="img" /> */}

          {/* <Image
            src="/images/607-6070358_enterprise-tablet-pro-samsung-tab-pos-hd-png-removebg-preview 1.png"
            alt="img"
          /> */}
          <img
            src="/images/607-6070358_enterprise-tablet-pro-samsung-tab-pos-hd-png-removebg-preview 1.png"
            alt="img"
          />
        </div>
      </div>
      <div className={styles.contact__bgform}>
        <FormContent />
      </div>
    </div>
  );
};

export default Contact;
