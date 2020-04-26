import React from "react";
import PropTypes from "prop-types";

const AddContactForm = ({ formSubmit, inputValue, name, number }) => {
  return (
    <form onSubmit={formSubmit}>
      <p>Name</p>
      <input type="text" onChange={inputValue} value={name} name="name" required></input>
      <p>Number</p>
      <input
        type="text"
        onChange={inputValue}
        value={number}
        name="number"
        required
      />
      <button>Add phone</button>
    </form>
  );
  AddContactForm.propTypes = {
    formSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  };
};

export default AddContactForm;
