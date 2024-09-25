const BarControls = ({ onAddDrink }) => {
  return (
    <div>
      <button onClick={() => onAddDrink("beer")}>Add beer</button>
      <button onClick={() => onAddDrink("wine")}>Add wine</button>
      <button onClick={() => onAddDrink("whiskey")}>Add whiskey</button>
    </div>
  );
};

export default BarControls;
