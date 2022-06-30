import React from "react";

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className='mb-1 font-semibold text-black capitalize'>{labelText || name}</label>
      <select name={name} id={name} value={value} onChange={handleChange}
      className='border  outline-none p-1 rounded capitalize bg-slate-100 form-select'>
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue} className='capitalize bg-blue-50'>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
