import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import styles from "./ContactItem.module.css"
class ContactItem extends Component {
  handleClick = evt => {
    const ids = evt.currentTarget.closest('li').dataset.value;
    this.props.handleDelete(ids);
  };
  render() {
    const { name, number } = this.props;
    return (
      <div className={styles.contactItem}>
        <p>{name}:</p>
        <p>{number}</p>
        <Icon style={{ color: "red", backgroundColor: "white", borderRadius: "50%", fontSize: 24, cursor: "pointer"}} onClick={this.handleClick}>highlight_off</Icon>
      </div>
    );
  }
}

export default ContactItem;
