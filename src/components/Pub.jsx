import { useState } from "react";
import BarControls from "./BarControls";
import BarStats from "./BarStats";
import Modal from "./Modal/Modal";

const Pub = () => {
  const [bottles, setBottles] = useState({
    beer: 0,
    wine: 0,
    whiskey: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onAddDrink = (drinkName) => {
    setBottles({ ...bottles, [drinkName]: bottles[drinkName] + 1 });
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <BarStats bottles={bottles} />
      <BarControls onAddDrink={onAddDrink} />
      <button onClick={onOpenModal} type="button">
        Open modal for additional details
      </button>
      {isModalOpen && <Modal onCloseModal={onCloseModal} />}
    </div>
  );
};

export default Pub;
