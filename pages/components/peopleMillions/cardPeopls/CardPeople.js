import styles from "./cardPeople.module.scss";
import React from "react";
// import Image from "next/image";

const CardPeople = ({ img, h1text, ptext, top }) => {
  return (
    <div className={styles.cardPeople}>
      {/* <Image src={img} alt="img" /> */}
      <img src={img} className={`${top ? styles.top : ""}`} />
      <h1>{h1text}</h1>
      <p>{ptext}</p>
      {/* <p>{ptext2}</p> */}
      <button>LEARN MORE</button>
    </div>
  );
};

export default CardPeople;
