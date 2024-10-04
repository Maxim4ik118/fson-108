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
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const stringifiedUsers = JSON.stringify(users);
    localStorage.setItem("users", stringifiedUsers);
  }, [users]);

  const onAddProfile = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    setUsers((prevState) => [...prevState, finalUser]);
  };

  const onDeleteProfile = (profileId) => {
    // "3"
    const updatedUsers = users.filter((user) => user.id !== profileId);

    setUsers(updatedUsers);
  };

  const onSayMyName = (profileName) => {
    console.log("profileName: ", profileName);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      user.email.toLowerCase().includes(filter.toLowerCase().trim()) ||
      user.phone.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      <h1>Hello FSON-108!🎉</h1>
      <AddProfileForm onAddProfile={onAddProfile} />
      <Section title="Find users by (name, email, phone)">
        <input
          type="text"
          placeholder="Enter keyword to search"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        {/* <button
          onClick={() => setFilter("Hi my gorgeos friend on the Internet!")}
          type="button"
        >
          Click to fill the filter
        </button> */}
      </Section>
      <Section title="User list">
        {filteredUsers.map((profileItem) => {
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
