import React from "react";
// import { forktwo, vectorball, vectorcard, hotel } from "../../../assets";
import CardSolution from "./cardSolution/CardSolution";
import styles from "./solution.module.scss";
const Solution = () => {
  return (
    <div className={styles.solution}>
      <h1 className={styles.solution__h1}>
        Find the right solutions for your
        <br /> businesss
      </h1>
      <div className={styles.solution__flex}>
        <div>
          <CardSolution
            img="/images/forktwo.png"
            htext="Restaurants & Nightlife"
            ptext="HighTable makes it easy to digitize your customer’s ordering process. Allow your customers place orders from their devices at anytime. This helps you save time and eliminate errors."
          />
          <CardSolution
            img="/images/Vectorball.png"
            htext="Travels & Tours"
            ptext="We specialize in making it stress-free for users to plan travels and exciting tours. highTable connects you with the best travelers as well as tourists."
          />
        </div>
        <div>
          <CardSolution
            img="/images/Vectorcard.png"
            htext="Event Organizers"
            ptext="Take your events to the next level with hightable. we do the planning and marketing for you to have a great turnout at your Event. "
          />
          <CardSolution
            img="/images/bx_bxs-hotel.png"
            htext="Hotels & Shortlets"
            ptext="hightable makes it pleasant for you to cater to the needs of our users. we connect you to the right individuals in need of hotels, apartments & shortlets. "
          />
        </div>
      </div>
      <div className={styles.solution__flexbtn}>
        <button>Register your Business now</button>
      </div>
      <div className={styles.solution__bgimage}></div>
    </div>
  );
};

export default Solution;
