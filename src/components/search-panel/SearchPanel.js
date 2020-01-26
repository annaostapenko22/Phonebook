import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import styles from "./SearchPanel.module.css"
class SearchPanel extends Component {
  state = {
    value: '',
   
  };
  onChangePanel = evt => {
    const values = evt.target.value.toLowerCase();
    this.props.onHandleFilter(values);
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Find contacts by name</h3>
        <TextField id="filled-search" label="Search contact" type="search" variant="outlined" 
          onChange={this.onChangePanel} className={styles.searchField}/>
      </div>
    );
  }
}

export default SearchPanel;