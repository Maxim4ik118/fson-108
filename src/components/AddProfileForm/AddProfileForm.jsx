import css from "./AddProfileForm.module.css";

const AddProfileForm = ({ onAddProfile }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const status = form.elements.status.value;
    const hasPhysicalAddress = form.elements.hasPhysicalAddress.checked;

    const formData = {
        name,
        phone,
        email,
        status,
        hasPhysicalAddress,
    };

    onAddProfile(formData);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <span>Name:</span>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Ivan Ivanov"
          required
        />
      </label>
      <label className={css.label}>
        <span>Phone:</span>
        <input
          className={css.input}
          type="text"
          name="phone"
          placeholder="+38xxxxxxxxxx"
          required
        />
      </label>
      <label className={css.label}>
        <span>Email:</span>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="example.ua@gmail.com"
          required
        />
      </label>
      <div>
        <h3>Status:</h3>
        <label className={css.radioLabel}>
          <span>Online:</span>
          <input type="radio" name="status" value="online" required />
        </label>
        <label className={css.radioLabel}>
          <span>Offline:</span>
          <input type="radio" name="status" value="offline" required />
        </label>
      </div>

      <label className={css.checkboxLabel}>
        <input type="checkbox" name="hasPhysicalAddress" />
        <span>Has user physical address?</span>
      </label>

      <button type="submit">🤷‍♂️ Add Profile</button>
    </form>
  );
};

export default AddProfileForm;
