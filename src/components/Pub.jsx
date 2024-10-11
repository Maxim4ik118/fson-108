import { useContext, useState } from "react";
import BarControls from "./BarControls";
import BarStats from "./BarStats";
import Modal from "./Modal/Modal";
import { PubContext } from "../context/PubContext";

const Pub = () => {
  const { bottles, onAddDrink } = useContext(PubContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
