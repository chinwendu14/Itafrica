import React from "react";
import styles from "./cardSoldOut.module.scss";
import Image from "next/image";
import { checkone, laptop } from "../../../../../assets";

const CardSoldOut = ({ htext, ptext1, ptext2, data2 }) => {
  return (
    <div className={styles.cardSoldOut}>
      <div className={styles.cardSoldOut__divtext}>
        <h1>{htext}</h1>
        <p>{ptext1}</p>
        <p>{ptext2}</p>

        <div className={styles.cardSoldOut__divMap}>
          {data2 &&
            data2.map((item, i) => {
              return (
                <div key={i}>
                  <p>
                    <span>
                      <Image
                        src="/public/images/akar-icons_circle-check-fill.png"
                        alt="img"
                      />
                    </span>
                    {item.name1}
                  </p>
                </div>
              );
            })}
        </div>
        <div className={styles.cardSoldOut__divButton}>
          <button>Book Demo</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className={styles.cardSoldOutimg}>
        <Image src="/public/images/Rectangle.png" alt="img" />
      </div>
    </div>
  );
};

export default CardSoldOut;
