import React, { Component } from "react";
import AddContactForm from "./Components/AddContactForm/AddContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import { v4 as uuidv4 } from "uuid";
import storage from "./utils/storage"

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  isContact = () => {
    if (this.state.contacts.find((el) => el.name === this.state.name)) {
      return true;
    }
  };

  inputValue = (e) => {
    const target = e.target.name;
    const value = e.target.value;
    this.setState({ [target]: value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    if (this.state.name === "" || this.state.number === "" ) {
      alert("Fill the form");
      return;
    }
    if (this.isContact() === true) {
      alert(`${this.state.name} is already in contact`);
      this.setState({
        name: "",
        number: "",
      });
      return;
    } else {
      this.setState({ contacts: [...this.state.contacts, contact] });
    }
    this.setState({
      name: "",
      number: "",
    });
  };

  deleteItem = (id) => {
    const deletedArr = this.state.contacts.filter((el) => el.id !== id);
    this.setState({ contacts: deletedArr });
  };

  filteredNames = () => {
    return this.state.contacts.filter((el) =>
      el.name.toLowerCase().includes(this.state.filter)
    );
  };

  takeFromStorage = () => {
    const getContact = storage.get("contact")
    if (getContact) {
    this.setState({
      contacts: getContact
    })
  }
  }

  async componentDidMount () {
    this.takeFromStorage()
  }
 
  addToStorage = (prevState) => {
    if (prevState !== this.state.contacts) {
      storage.save("contact", this.state.contacts)
    }
  }


  async componentDidUpdate (prevState) {
    this.addToStorage(prevState)
  }



  render() {
    const { name, contacts, filter, number } = this.state;

    return (
      <>
        <h1>PhoneBook</h1>
        <AddContactForm
          formSubmit={this.formSubmit}
          inputValue={this.inputValue}
          name={name}
          number={number}
        />
        <h2>Contact List</h2>
        <Filter inputValue={this.inputValue} filter={filter}/>
        <ContactList
          contacts={contacts}
          filteredNames={this.filteredNames}
          deleteItem={this.deleteItem}
        />
      </>
    );
  }
}

export default App;
