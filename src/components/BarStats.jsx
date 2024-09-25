const BarStats = ({ bottles }) => {
  
  return (
    <ul>
      <li>Beer: {bottles.beer}</li>
      <li>Wine: {bottles.wine}</li>
      <li>Whiskey: {bottles.whiskey}</li>
    </ul>
  );
};

export default BarStats;
