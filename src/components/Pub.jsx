import { useState } from "react";
import BarControls from "./BarControls";
import BarStats from "./BarStats";
import Button from "./Button";

const Pub = () => {
  const [bottles, setBottles] = useState({
    beer: 0,
    wine: 0,
    whiskey: 0,
  });

  const onAddDrink = (drinkName) => {
    // "beer" | "wine" | "whiskey"
    setBottles({ ...bottles, [drinkName]: bottles[drinkName] + 1 });

    // const obj = {
    //     age: 10
    // }

    // const objKey = "age"
    // obj.age // 10
    // obj[objKey] // 10

    // if (drinkName === "beer") {
    //   setBottles({ ...bottles, beer: bottles.beer + 1 });
    // }
    // if (drinkName === "wine") {
    //   setBottles({ ...bottles, wine: bottles.wine + 1 });
    // }
    // if (drinkName === "whiskey") {
    //   setBottles({ ...bottles, whiskey: bottles.whiskey + 1 });
    // }
  };

  return (
    <div>
      <BarStats bottles={bottles} />
      <BarControls onAddDrink={onAddDrink} />
    </div>
  );
};

export default Pub;
