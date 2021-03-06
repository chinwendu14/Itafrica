import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
// import { arrowdown, icons, logowhite } from "../../assets";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__flex}>
        <div className={styles.footer__div1}>
          <div className={styles.footer__div1FlexContainer}>
            <div className={styles.footer__divLink}>
              <h3>Company</h3>
              <ul>
                <li>Team</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Our Story</li>
              </ul>
            </div>
            <div className={styles.footer__divLink}>
              <h3>Tools & Resources</h3>
              <ul>
                <li>Success Stories</li>
                <li>Blog</li>
                <li>Tutorials</li>
              </ul>
            </div>
            <div className={styles.footer__divLink}>
              <h3>Who We Server</h3>
              <ul>
                <li>Restaurants</li>
                <li>Event Planners</li>
                <li>Nightclubs</li>
                <li>Hostels</li>
                <li>Bars & Lounges</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer__div1imgDiv}>
            <span>
              {/* <Image
                src="/public/images/Rectangle 1.png"
                alt="img"
              /> */}
              <img src="/images/Rectangle 1.png" alt="img" />
            </span>
          </div>
          <p>© 2020 HighTable LLC All rights reserved.</p>
        </div>
        <div className={styles.footer__div2}>
          <div className={styles.footer__divdrop}>
            <p>
              LGS NGN
              <span>
                {/* <Image
                  src="/images/Polygon 1.png"
                /> */}
                <img src="/images/Polygon 1.png" alt="img" />
              </span>
            </p>
            <p>
              Nigeria
              <span>
                {/* <Image src="/images/Polygon 1.png" alt="img" /> */}
                <img src="/images/Polygon 1.png" alt="img" />
              </span>
            </p>
          </div>
          <div className={styles.footer__divicon}>
            {/* <Image
              src="/images/Frame 2250.png"
              alt="img"
              width={500}
              height={60}
            /> */}
            <img src="/images/Frame 2250.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
