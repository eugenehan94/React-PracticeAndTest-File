import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";
const TextFieldWrapper = ({ name, ...otherProps }) => {
  console.log("NAME: ", name);
  console.log("Other Props: ", otherProps);
  const [field, meta] = useField(name);
  console.log("Field: ", field);
  console.log("Meta: ", meta);
  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
};

export default TextFieldWrapper;
