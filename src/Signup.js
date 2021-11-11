import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label for="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
        <br />

        <label for="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        <br />

        <label for="email">Email: </label>
        <input
          id="emailName"
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <p>{formik.errors.email}</p> : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
