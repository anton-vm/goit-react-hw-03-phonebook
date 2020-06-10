import React from "react";
import PropTypes from "prop-types"

const Filter = ({ inputValue,  }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onInput={inputValue}
        name="filter"/>
    </>
  );
  Filter.propTypes ={
    inputValue:PropTypes.func.isRequired,

  }

};

export default Filter;
