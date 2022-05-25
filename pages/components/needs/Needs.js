import React from "react";
import styles from "./needs.module.scss";
// import Image from "next/image";
// import { fork } from "../../../assets";

const Needs = () => {
  return (
    <div className={styles.needs}>
      <div className={styles.needs__bgDiv}>
        <h1 className={styles.needsh1}>
          Our business platform caters to
          <br /> business management needs
        </h1>
        <div className={styles.needs__bgflexcont}>
          <div className={styles.needs__bgDivcon1}>
            <div className={styles.needs__TextDiv1}>
              <h1>
                <span>
                  <img src="/images/ic_outline-restaurant.png" alt="img" />

                  {/* <Image src="/images/ic_outline-restaurant.png" alt="img" /> */}
                </span>
                For Guests
              </h1>
              <p>
                Satisfy your guests while increasing regular spending by a
                percentage.
              </p>
            </div>
            <div className={styles.needs__TextDiv2}>
              <h1>
                <span>
                  {/* <Image src="/images/ic_outline-restaurant.png" alt="img" /> */}
                  <img src="/images/ic_outline-restaurant.png" alt="img" />
                </span>
                For Employees
              </h1>
              <p>
                Be of service to your team in turning tables faster and running
                payrolls in a short period of time.
              </p>
            </div>
          </div>
          <div className={styles.needs__bgDivcon2}>
            <div className={styles.needs__TextDiv1}>
              <h1>
                <span>
                  {/* <Image src="/images/ic_outline-restaurant.png" alt="img" /> */}
                  <img src="/images/ic_outline-restaurant.png" alt="img" />
                </span>
                For Operations{" "}
              </h1>
              <p>
                Entrust all your orders with HighTable through a single point of
                sale to gain access to support at anytime.
              </p>
            </div>
            <div className={styles.needs__TextDiv2}>
              <h1>
                <span>
                  {/* <Image src="/images/ic_outline-restaurant.png" alt="img" /> */}
                  <img src="/images/ic_outline-restaurant.png" alt="img" />
                </span>
                For Business{" "}
              </h1>
              <p>
                Increase online sales while reducing third-party commissions by
                a large percentage.
              </p>
            </div>
          </div>
        </div>
        <button>How it works</button>
      </div>
    </div>
  );
};

export default Needs;
