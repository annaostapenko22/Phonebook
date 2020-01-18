import React from 'react';
import styles from "./Notification.module.css"
const Notification = ({title}) => 
{
    return (
        <div className={styles.container}>
<p>{title}</p>
      </div>
    )
}

export default Notification;