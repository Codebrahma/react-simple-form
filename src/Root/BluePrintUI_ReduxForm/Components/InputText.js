import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Field } from 'redux-form';

/* Use blue print classes to get input text */
const _InputTextUI = ({className, ...props}) => (
  <input
    type="text"
    className={ className || 'pt-input'}
    {...props}/>
);

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputTextUI = FormStructureHOC(_InputTextUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputText = ({ name, placeholder, label, ...props }) => {
  placeholder = placeholder || label;
  return (
    <Field
      name={name}
      label={label}
      placeholder={placeholder}
      component={InputTextUI}
      {...props}
    />
  );
}
