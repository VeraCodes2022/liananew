import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from './TopNav.module.css';

function TopNav() {
  return (
    <div className={styles.topNav}>
        <div className={styles.container}>
            <ul className={styles.news}>
                <li><a className={styles.rtop} href="#">News</a></li>
                <li><a className={styles.rtop}  href="#">Intranet</a></li>
            </ul>
            <DropdownButton id={styles.dropdownitembutton} title="Language" className={styles.btn}>
              <Dropdown.ItemText>English</Dropdown.ItemText>
              <Dropdown.Item as="button">Finnish</Dropdown.Item>
              <Dropdown.Item as="button">Swedish</Dropdown.Item>
            </DropdownButton>
        </div>
    </div>
  )
}

export default TopNav;