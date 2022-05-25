import React from "react";
import CardSoldOut from "./cardSoldOut/CardSoldOut";

const SoldOut = () => {
  return (
    <div>
      <CardSoldOut
        htext="Let’s get you sold out"
        ptext1="HighTable makes it easy to connect your restaurant with "
        ptext2="new customers and definitely grow your business."
        data2={data1}
      />

      {/* <CardSoldOut
        htext="Manage Reservations"
        ptext1="
        You can take several actions with HighTable’s manaagement"
        ptext2="reservation expertise."
        data2={data2}
      /> */}
      <CardSoldOut
        htext="Manage Reservations"
        ptext1="You can take several actions with HighTable’s "
        ptext2="manaagement reservation expertise"
        data2={data2}
      />
      <CardSoldOut
        htext="Update Menu’s & Create Specials"
        ptext1="Keep your menus updated as well as creating specials "
        ptext2="with HighTable."
        data2={data3}
      />
    </div>
  );
};

const data1 = [
  { name1: "Gain new customers and increase your sales" },
  { name1: "Get double of your regular orders with HighTable" },
];
const data2 = [
  { name1: "Manage your tables and spots." },
  { name1: "Increase your revenue" },
  { name1: "Reduce wait time" },
  { name1: "Receive push notifications and email alerts for every order." },
];
const data3 = [
  { name1: "Access your menus on HighTable" },
  { name1: "Create new menus and specials" },

  { name1: "Update your menu" },
];
export default SoldOut;
