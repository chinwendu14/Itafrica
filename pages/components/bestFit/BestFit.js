import React from "react";
import styles from "./bestFit.module.scss";
import { fork, vectorone } from "../../../assets";
import Image from "next/image";

const BestFit = () => {
  return (
    <div className={styles.bestFit}>
      <h1>The best fit for your business</h1>
      <div className={styles.bestFit__flexDiv}>
        <div className={styles.bestFitserviceflex1}>
          <div className={styles.bestFitserviceBgImg1}>
            {/* <h1>jhdhkh</h1> */}
          </div>
          <div className={styles.bestFitserviceQuick1}>
            <h2>Quick Service</h2>
            <div>
              {data1.map((item, i) => {
                return (
                  <div key={i}>
                    <p>
                      <span>
                        <Image src={fork} alt="img" />
                      </span>
                      {item.name1}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.bestFitserviceflex1}>
          <div className={styles.bestFitserviceBgImg2}>
            {/* <h1>jhdhkh</h1> */}
          </div>
          <div className={styles.bestFitserviceQuick2}>
            <h2>Full Service</h2>
            <div>
              {data2.map((item, i) => {
                return (
                  <div key={i}>
                    <p>
                      <span>
                        <Image src={vectorone} alt="img" />
                      </span>
                      {item.name1}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const data1 = [
  {
    name1: "Cafes & Bakeries",
  },
  {
    name1: "Fast Casual ",
  },
  {
    name1: "Pizzerias",
  },
  {
    name1: "Cloud Kitchens",
  },
];
const data2 = [
  {
    name1: "Bars & Nightclubs",
  },
  {
    name1: "Casual Dinings ",
  },
  {
    name1: "Premium Casual ",
  },
  {
    name1: "Fine Dinings",
  },
];
export default BestFit;
