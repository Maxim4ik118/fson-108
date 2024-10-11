import { useContext } from "react";
import { PubContext } from "../context/PubContext";

const Profile = (props) => {
  const {
    id,
    name,
    phone,
    email,
    status,
    hasPhysicalAddress = false,
    onSayMyName,
    onDeleteProfile,
  } = props;

  const { onAddDrink } = useContext(PubContext);

  return (
    <div>
      <button type="button" onClick={() => onDeleteProfile(id)}>
        ❌
      </button>
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status}</p>
      <p>Has physical address: {hasPhysicalAddress ? "Yes" : "No"}</p>
      <button type="button" onClick={() => onSayMyName(name)}>
        Say my name!
      </button>
      <button type="button" onClick={() => onAddDrink("beer")}>
        🍺
      </button>
      <button type="button" onClick={() => onAddDrink("wine")}>
        🍷
      </button>
      <button type="button" onClick={() => onAddDrink("whiskey")}>
        🌳
      </button>
    </div>
  );
};

export default Profile;
