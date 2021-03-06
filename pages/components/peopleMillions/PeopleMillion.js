import styles from "./peopleMillion.module.scss";
// import { dollasign, power, greater } from "../../../assets";
import React from "react";
import CardPeople from "./cardPeopls/CardPeople";
const PeopleMillion = () => {
  return (
    <div className={styles.PeopleMillion}>
      <div className={styles.PeopleMillion__flexText}>
        <h1>
          Get discovered by millions of people ready to
          <br /> pay for your services.
        </h1>
        <p>Many people visit HighTable everyday to find restaurants.</p>
        <p>Get in front of more customers.</p>
      </div>
      <div className={styles.PeopleMillion__cardDiv}>
        <CardPeople
          img="/images/Vector.png"
          top
          h1text="90+ million Visitors"
          ptext="Countless people visit HighTable everyday to find restaurants."
          // ptext2="everyday to find restaurants."
        />
        <CardPeople
          img="/images/code.png"
          h1text="95% Conversion Rate"
          ptext=" High conversion rate because our users want what you offer."
          // ptext2="users want what you offer."
        />
        <CardPeople
          img="/images/attach_money.png"
          h1text="5-Star satisfaction"
          ptext="Our customer service is top-notch and so you have no worries. "
          // ptext2="and so you have no worries."
        />

        <CardPeople
          img="/images/attach_money.png"
          h1text="600% Efficient"
          ptext="We function in the best possible manner at HighTable. "
          // ptext2="manner at HighTable."
        />
      </div>
    </div>
  );
};

export default PeopleMillion;
