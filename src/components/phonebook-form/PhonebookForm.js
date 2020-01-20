import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import slideTransition from "../transitions/slide-transition.module.css";
import shortId from "short-id";
import ContactList from "../contact-list/ContactList";
import TextField from "@material-ui/core/TextField";
import styles from "./PhonebookForm.module.css";
import Button from "@material-ui/core/Button";
import "typeface-roboto";
import Notification from "../alert/Notification";
class PhonebookForm extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
    isOpen: false,
    error: false,
    alreadyExist: false,
    notitficationTitle: ""
  };
  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    this.setState({ contacts: users, isOpen: true, alreadyExist: false });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("users", JSON.stringify(this.state.contacts));
    }
  }

  deleteItems = id => {
    this.setState(({ contacts }) => {
      const newArr = contacts.filter(elem => elem.id !== id);
      return {
        contacts: newArr
      };
    });
  };

  onHandleGetValue = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState({
      [name]: value
    });
  };

  onHandleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    if (!name || !number) {
      alert("PLease fill all the fields");
      return;
    }
    if (this.state.contacts.find(elem => elem.name.includes(name))) {
      this.showNotification(`This contact: ${name} already exists`);
      return;
    }

    this.getPost({ id: shortId.generate(), name, number });
    this.setState({ name: "" });
    this.setState({ number: "" });
  };

  getPost = post => {
    this.setState(state => ({
      contacts: [...state.contacts, post]
    }));
  };

  setFilterState = value => {
    this.setState({ filter: value });
  };

  filterItems = (filter, contacts) => {
    if (this.state.contacts) {
      let contactList = [...contacts];
      if (filter) {
        contactList = contactList.filter(elem =>
          elem.name.toLowerCase().includes(filter)
        );
      }
      return contactList;
    }
  };

  showNotification = notificationTitle => {
    this.setState({ notificationTitle, alreadyExist: true });
    setTimeout(() => this.setState({ notificationTitle: "", alreadyExist: false, name: "", number: "" }), 3000);
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredItems = this.filterItems(filter, contacts);
    const { isOpen, alreadyExist } = this.state;
    return (
      <div>
        <CSSTransition
          in={alreadyExist}
          timeout={400}
          classNames={slideTransition}
          unmountOnExit
        >
          <Notification title={this.state.notificationTitle} />
        </CSSTransition>

        <form
          onSubmit={this.onHandleSubmit}
          className={styles.phonebook}
          noValidate
          autoComplete="off"
        >
          <CSSTransition
            in={isOpen}
            timeout={400}
            classNames={slideTransition}
            unmountOnExit
          >
            <h2 className={styles.title}>Phonebook</h2>
          </CSSTransition>
          <div className={styles.wrapper}>
            <TextField
              id="outlined-basic1"
              label="Name"
              variant="outlined"
              type="text"
              onChange={this.onHandleGetValue}
              value={name}
              name="name"
              className={styles.input}
              autoComplete="string"
            />
            <TextField
              error={this.state.error}
              id="outlined-basic2"
              label="Number"
              variant="outlined"
              type="tel"
              value={number}
              onChange={this.onHandleGetValue}
              name="number"
              className={styles.input}
            />
            <Button variant="contained" color="primary" type="submit">
              Add contact
            </Button>
          </div>
        </form>
        {this.state.contacts.length > 0 && (
          <ContactList
            value={filteredItems}
            onHandleFilter={this.setFilterState}
            handleDelete={this.deleteItems}
            contacts={this.state.contacts}
          />
        )}
      </div>
    );
  }
}

export default PhonebookForm;
