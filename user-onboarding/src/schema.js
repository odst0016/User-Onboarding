import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Must include an email"),
  terms: yup.boolean().oneOf([true]).required("please agree to terms of use"),
  password: yup.string().required("Password is required"),
});
