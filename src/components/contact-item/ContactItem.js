import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import styles from "./ContactItem.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions";
class ContactItem extends Component {
  handleClick = evt => {
    const ids = evt.currentTarget.closest("li").dataset.value;
    this.props.deleteContact(ids);
  };
  render() {
    const { name, number } = this.props;
    return (
      <div className={styles.contactItem}>
        <p>{name}:</p>
        <p>{number}</p>
        <Icon
          style={{
            color: "red",
            backgroundColor: "white",
            borderRadius: "50%",
            fontSize: 24,
            cursor: "pointer"
          }}
          onClick={this.handleClick}
        >
          highlight_off
        </Icon>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
