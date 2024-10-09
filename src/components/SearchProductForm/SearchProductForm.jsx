import { ErrorMessage, Field, Form, Formik } from "formik";

import { SearchProductsSchema } from "../../utils/schemas";

import css from "./SearchProductForm.module.css";

const INITIAL_VALUES = {
  searchTerm: "",
};

const SearchProductForm = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    // values => { searchTerm: "search text" }
    onSearch(values.searchTerm);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={SearchProductsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <Field
            type="text"
            name="searchTerm"
            className={css.input}
            placeholder="Enter search term"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="searchTerm"
            component="span"
          />
        </label>

        <button type="submit">🔍</button>
      </Form>
    </Formik>
  );
};

export default SearchProductForm;
