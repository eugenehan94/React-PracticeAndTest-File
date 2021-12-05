import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "./Component/TextField/";

import { useFormik, Field, ErrorMessage, useField } from "formik";
const useStyles = makeStyles((theme) => ({
  fontWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
// const INITIAL_FORM_STATE = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
// };

// const FORM_VALIDATION = Yup.object().shape({
//   firstName: Yup.string().required("Required"),
//   lastName: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   phone: Yup.number()
//     .integer()
//     .typeError("Please enter a valid number")
//     .required("Required"),
// });

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? meta.touched && meta.error : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...Field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false,
          jobType: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.Boolean(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
          <label htmlFor="email">Email address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
        )
      </Formik>

      {/* <Grid container>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h4">Heading</Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <div className={classes.formWrapper}>
              <Formik
                initialValues={{ ...INITIAL_FORM_STATE }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography>Your details</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="firstName" label="First Name" />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="lastName" label="Last Name" />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Address</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield name="email" label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Booking Information</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield name="phone" label="Phone" />
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default App;
