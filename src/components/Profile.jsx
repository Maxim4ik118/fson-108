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

  return (
    <div>
      <button type="button" onClick={() => onDeleteProfile(id)}>❌</button>
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status}</p>
      <p>Has physical address: {hasPhysicalAddress ? "Yes" : "No"}</p>
      <button type="button" onClick={() => onSayMyName(name)}>
        Say my name!
      </button>
    </div>
  );
};

export default Profile;
