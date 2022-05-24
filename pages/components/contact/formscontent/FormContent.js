import React from "react";
// import styles from "./formContent.scss";
import styles from "./formContent.module.scss";
import Image from "next/image";
import { checkone, dotwhite } from "../../../../assets";

const FormContent = () => {
  return (
    <div className={styles.formcontent}>
      <div className={styles.formcontent__imgDiv}>
        <p>
          We recommend you to join our maiing list where we
          <br /> give you updates about the latest events.
        </p>
        <div>
          <Image src={dotwhite} alt="img" />
        </div>
        <div className={styles.imgdiv}>
          <Image src={dotwhite} alt="img" />
        </div>
      </div>

      <form>
        <div className={styles.formControl}>
          <input type="email" placeholder="Email address" />
        </div>
        <div className={styles.formControl}>
          <input type="text" placeholder="Name" />
        </div>{" "}
        <div className={styles.formControl}>
          <input type="number" placeholder="Phone Number" />
        </div>{" "}
        <div className={styles.formControl}>
          <input type="text" placeholder="Zip Code" />
        </div>{" "}
        <div className={styles.formControl}>
          <input type="text" placeholder="Restaurant Name" />
        </div>
      </form>
      <div className={styles.desc}>
        <h1>Which best describes you?</h1>
      </div>
      <div className={styles.descDivFlexCard}>
        <div className={styles.divCardorange}>
          <p>
            I am interested <br />
            in using Hightable
          </p>
          <div className={styles.divCardimg}>
            <Image src={checkone} alt="img" />
          </div>
        </div>
        <div className={styles.divCardash}>
          <p>
            I am already a
            <br />
            hightable customer
          </p>
        </div>
        <div className={styles.divCardash}>
          <p>
            I am a simple restaurant <br />
            guest
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
