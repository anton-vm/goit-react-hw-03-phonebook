import React from "react";
import PropTypes from 'prop-types'

const ContactList = ({ contacts, filteredNames, deleteItem }) => {

  return (
    <>
      {contacts.length > 2 ? (
        <ul>
          {filteredNames().map((el) => (
            <li key={el.id}>
              {el.name}: {el.number} {"   "}
              <button onClick={() => deleteItem(el.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {contacts.map((el) => (
            <li key={el.id}>
              {el.name}: {el.number} {"   "}
              <button onClick={() => deleteItem(el.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
  ContactList.propTypes ={ 
    contacts: PropTypes.arrayOf({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    filteredNames: PropTypes.func, 
    deleteItem: PropTypes.func,
  }
};

export default ContactList;
