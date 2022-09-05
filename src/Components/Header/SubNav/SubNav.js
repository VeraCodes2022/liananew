import React from 'react';
import styles from './SubNav.module.css';

function SubNav() {
  return (
    <div className={styles.nav}>
        <div className={styles.wrapper}>
            <p>News</p>
            <p>Intranet</p>
            <select className={styles.select}>
              <option>In English</option>
              <option>In Finnish</option>
              <option>In Swedish</option>
            </select>
        </div>
    </div>
  )
}

export default SubNav;