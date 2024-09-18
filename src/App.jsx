import Profile from "./components/Profile";

import profilesData from "../profiles.json";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <h1>Hello FSON-108!🎉</h1>

      <Section title="Test">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempora.
        </p>
        <button type="button">Click to increase your money</button>
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
            />
          );
        })}
      </Section>
    </div>
  );
}

export default App;
