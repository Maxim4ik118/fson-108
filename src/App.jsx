import { useEffect, useState } from "react";

import Profile from "./components/Profile";
import AddProfileForm from "./components/AddProfileForm/AddProfileForm";
import Section from "./components/Section";

import profilesData from "../profiles.json";
import { nanoid } from "nanoid";

function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem("users");
    const parsedUsers = JSON.parse(stringifiedUsers) ?? profilesData;

    return parsedUsers;
  }); // [{...}, {...}, {...}]

  useEffect(() => {
    const stringifiedUsers = JSON.stringify(users);
    localStorage.setItem("users", stringifiedUsers);
  }, [users]);

  const onAddProfile = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    //  setUsers([...users, finalUser]);
    setUsers((prevState) => [...prevState, finalUser]);
  };

  const onDeleteProfile = (profileId) => { // "3"
    const updatedUsers = users.filter((user) => user.id !== profileId);
    // users = [{id: "1"}, {id: "2"}, {id: "3"}]
    // "1" !== "3"
    // "2" !== "3"
    // "3" !== "3"
    // updatedUsers = [{id: "1"}, {id: "2"}]

    setUsers(updatedUsers)
  }

  const onSayMyName = (profileName) => {
    console.log("profileName: ", profileName);
  };

  return (
    <div>
      <h1>Hello FSON-108!🎉</h1>
      <AddProfileForm onAddProfile={onAddProfile} />
      <Section title="User list">
        {users.map((profileItem) => {
          return (
            <Profile
              key={profileItem.id}
              
              id={profileItem.id}
              name={profileItem.name}
              phone={profileItem.phone}
              status={profileItem.status}
              email={profileItem.email}
              hasPhysicalAddress={profileItem.hasPhysicalAddress}
              onSayMyName={onSayMyName}
              onDeleteProfile={onDeleteProfile}
            />
          );
        })}
      </Section>
    </div>
  );
}

export default App;
