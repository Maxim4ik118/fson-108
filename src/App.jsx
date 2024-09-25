import Profile from "./components/Profile";

import profilesData from "../profiles.json";
import Section from "./components/Section";
import { useState } from "react";
import Pub from "./components/Pub";

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onSayMyName = (profileName) => {
    console.log("profileName: ", profileName);
  };

  return (
    <div>
      <h1>Hello FSON-108!🎉</h1>
      <Section title="My first Pub">
        <Pub />
      </Section>

      <Section title="Test State">
        <h3>Count: {count}</h3>
        {count > 5 && (
          <div>
            Congratulations 🎉!!! You&apos;ve got a 30% OFF discount promo -{" "}
            <b>#12341BA</b>
          </div>
        )}
        <button onClick={onIncrement}>Increment count</button>
      </Section>

      <Section title="User list">
        {profilesData.map((profileItem) => {
          return (
            <Profile
              key={profileItem.email}
              name={profileItem.name}
              phone={profileItem.phone}
              status={profileItem.status}
              email={profileItem.email}
              hasPhysicalAddress={profileItem.hasPhisicalAddress}
              onSayMyName={onSayMyName}
            />
          );
        })}
      </Section>
    </div>
  );
}

export default App;
