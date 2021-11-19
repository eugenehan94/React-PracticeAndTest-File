import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "adsa",
  email: "zcvz",
  channel: "qwee",
  comments: "asdfafe",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (value, onSubmitProps) => {
  // console.log("Form data", value);
  console.log("submit props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

// const validate = (values) => {
//   //values.name values.email values.channel
//   //errors.name errors.email errors.channel
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required name"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

function YoutubeForm() {
  const [formValues, setFormValues] = useState(null);
  return (
    <div>
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        // validateOnChange={false}
        // validateOnBlur={false}
        // validateOnMount
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <label htmlFor="name">name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.name}
                  // {...formik.getFieldProps("name")}
                />

                {/* <ErrorMessage name="name" component={TextError} /> */}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.email}
                  // {...formik.getFieldProps("email")}
                />
                <ErrorMessage name="email">
                  {(errorMsg) => <div>{errorMsg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  id="channel"
                  name="channel"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.channel}
                  // {...formik.getFieldProps("channel")}
                />

                <ErrorMessage name="channel" />
              </div>
              <div>
                <label htmlFor="comments">Comments</label>
                <Field
                  as="textarea"
                  id="comments"
                  name="comments"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" components />
              </div>

              <div>
                <label htmlFor="address">Address</label>
                <FastField name="address">
                  {" "}
                  {(props) => {
                    const { field, form, meta } = props;
                    console.log("Render props", props);
                    return (
                      <div>
                        <input id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </FastField>
              </div>
              <div>
                <label htmlFor="facebook">Facebook profile</label>
                <Field type="text" id="facebook" name="social.facebook" />
              </div>
              <div>
                <label htmlFor="twitter">twitter profile</label>
                <Field type="text" id="twitter" name="social.twitter" />
              </div>

              <div>
                <label htmlFor="primaryPh">Primary phone number</label>
                <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
              </div>
              <div>
                <label htmlFor="secondaryPh">Secondary phone number</label>
                <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
              </div>

              <div>
                <label>List of phone numbers</label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    console.log("fieldArrayProps", fieldArrayProps);
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;

                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                {" "}
                                -{" "}
                              </button>
                            )}
                            <button type="button" onClick={() => push("")}>
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        ))}{" "}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              <button
                type="button"
                onClick={() => formik.validateField("comments")}
              >
                Validate comments
              </button>
              <button type="button" onClick={() => formik.validateForm()}>
                Validate all
              </button>
              <button type="submit" disable={!(formik.dirty && formik.isValid)}>
                Submit
              </button>
              <button type="sumbit" disable={formik.isSubmitting}>
                Disable when submitting
              </button>
              <button type="button" onClick={() => setFormValues(savedValues)}>
                Load Saved Data
              </button>
              <button type="reset">Reset</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default YoutubeForm;
