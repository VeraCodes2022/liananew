import React,{useState} from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import {NavDropdown} from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from './TopNav.module.css';

function TopNav() {
  const [language,setLanguage]=useState(false);
  const showLanguage=()=>{setLanguage(!language)}
  const hideLanguage=()=>{setLanguage(language)}

  return (
    <div className={styles.topNav}>
        <div className={styles.container}>
            <ul className={styles.news}>
                <li><a className={styles.rtop} href="#">News</a></li>
                <li><a className={styles.rtop}  href="#">Intranet</a></li>
            </ul>
            {/* <DropdownButton id={styles.dropdownitembutton} title="Language" className={styles.btn}>
              <Dropdown.ItemText>English</Dropdown.ItemText>
              <Dropdown.Item as="button">Finnish</Dropdown.Item>
              <Dropdown.Item as="button">Swedish</Dropdown.Item>
            </DropdownButton> */}
            <NavDropdown title="Language" id="collasible-nav-dropdown" className={styles.btn}
               show={language} onMouseEnter={showLanguage} 
               onMouseLeave={hideLanguage}>
                  <NavDropdown.ItemText eventKey="1" id='text3'>English</NavDropdown.ItemText>
                  <NavDropdown.Item eventKey="2" id='text4' >Finnish</NavDropdown.Item>
                  <NavDropdown.Item eventKey="3" id='text5' >Swedish</NavDropdown.Item>
            </NavDropdown>
        </div>
    </div>
  )
}

export default TopNav;