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

import { useFormik, Field, ErrorMessage } from "formik";
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

const App = () => {
  const classes = useStyles();

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
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <button type="submit">Submit</button>
      </form>

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
