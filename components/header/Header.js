import React from "react";
import styles from "./header.module.scss";
import { logo } from "../../assets";
import Image from "next/image";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoDiv}>
        <Image
          src="/images/Ellipse 25.png"
          alt="img"
          height={100}
          width={250}
        />
      </div>

      <div className={styles.header__linkDiv}>
        <ul>
          <li className={styles.header__linkBlack}>Home</li>
          <li>Hightable Consumer</li>
          <li>Blog</li>
          <li>HT Routes</li>
        </ul>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
