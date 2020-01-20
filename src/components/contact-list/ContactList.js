import React, { Component } from "react";
import ContactItem from "../contact-item/ContactItem";
import SearchPanel from "../search-panel/SearchPanel";
import styles from "./ContactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../transitions/slide-transition.module.css";
class ContactList extends Component {
  state = {
    isOpen: false
  };
  componentDidMount() {
    this.setState({ isOpen: true });
  }
  render() {
    const { isOpen } = this.state;
    return (
      <div className={styles.contactsContainer}>
        <CSSTransition in={isOpen} timeout={400} classNames={slideTransition} >
          <h2 className={styles.title}>Contacts</h2>
        </CSSTransition>
        <div className={styles.wrapper}>
          {this.props.contacts.length > 1 && ( <SearchPanel onHandleFilter={this.props.onHandleFilter} />)}
         
          <TransitionGroup component="ul" className={styles.list}>
            {this.props.value &&
              this.props.value.map(elem => (
                <CSSTransition key={elem.id} timeout={400} classNames={slideTransition} >
                  <li data-value={elem.id}>
                    <ContactItem
                      {...elem}
                      handleDelete={this.props.handleDelete}
                    />
                  </li>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default ContactList;
