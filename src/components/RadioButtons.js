import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {}}
      </Field>
    </div>
  );
}

export default RadioButtons;
