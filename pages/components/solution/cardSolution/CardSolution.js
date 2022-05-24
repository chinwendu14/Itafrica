import React from "react";
import styles from "./cardSolution.module.scss";
// import Image from "next/Image";
import Image from "next/image";

const CardSolution = ({ img, htext, ptext }) => {
  return (
    <div className={styles.cardSolution}>
      <div className={styles.cardSolution__imgDiv}>
        <span>
          <Image src={img} alt="img" width={100} height={100} />
        </span>
      </div>
      <div className={styles.cardSolution__textDiv}>
        <h1>{htext}</h1>
        <p>{ptext}</p>
      </div>
    </div>
  );
};

export default CardSolution;
