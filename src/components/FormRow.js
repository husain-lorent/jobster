import React from "react";
import "./style/FormRow.css";
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row ">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
