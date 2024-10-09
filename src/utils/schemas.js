import * as Yup from "yup";

const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const AddProfileSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(
      phoneNumberRegex,
      "Invalid phone number. Phone must be +380XXXXXXXXX"
    ),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  status: Yup.string()
    .required("Status is required to choose")
    .oneOf(
      ["online", "offline"],
      "Status must be either 'online' or 'offline'"
    ),
  hasPhysicalAddress: Yup.boolean(),
});

export const SearchProductsSchema = Yup.object({
  searchTerm: Yup.string()
    .required("Search term is required")
    .min(2, "Search term must be at least 2 characters"),
});
