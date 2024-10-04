import { ErrorMessage, Field, Form, Formik } from "formik";

import { AddProfileSchema } from "../../utils/schemas";

import css from "./AddProfileForm.module.css";

const INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
  status: "", // "online" | "offline"
  hasPhysicalAddress: false,
};

const AddProfileForm = ({ onAddProfile }) => {
  const handleSubmit = (values, actions) => {
    onAddProfile(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={AddProfileSchema}
      onSubmit={handleSubmit}
    >
      {(form) => (
        <Form className={css.form}>
          {form.values.name === "#happynewyear2025" && (
            <h2>
              Congratulations!🎉 You won a promocode on a 60% OFF.{" "}
              <code>#ILOVEGOIT2025</code>{" "}
            </h2>
          )}
          <label className={css.label}>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              className={css.input}
              placeholder="Ivan Ivanov"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Phone:</span>
            <Field
              className={css.input}
              type="text"
              name="phone"
              placeholder="+38xxxxxxxxxx"
            />
            <ErrorMessage name="phone" component="span" />
          </label>
          <label className={css.label}>
            <span>Email:</span>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="example.ua@gmail.com"
            />
            <ErrorMessage name="email" component="span" />
          </label>
          <div>
            <h3>Status:</h3>
            <label className={css.radioLabel}>
              <span>Online:</span>
              <Field type="radio" name="status" value="online" />
            </label>
            <label className={css.radioLabel}>
              <span>Offline:</span>
              <Field type="radio" name="status" value="offline" />
            </label>
            <ErrorMessage name="status" component="span" />
          </div>

          <label className={css.checkboxLabel}>
            <Field type="checkbox" name="hasPhysicalAddress" />
            <span>Has user physical address?</span>
          </label>

          <button type="submit">🤷‍♂️ Add Profile</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddProfileForm;
