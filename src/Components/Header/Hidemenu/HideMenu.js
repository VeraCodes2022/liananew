import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HideMenu.module.css';


function HideMenu() {

  const redirect=useNavigate();
  const redirectPage=()=>{
    redirect('/', {replace:true})
}


  return (
    <div className={styles.menuwrapper}>
        <div className={styles.hidemenu}>
            <span 
            className={styles.close}
            onClick={redirectPage}
            >&times;</span>
            <div className={styles.navbar}>
              <li><a href='./'>Company</a></li>
              <li><a href='./'>Products</a></li>
              <li><a href='./'>Contact Us</a></li>
          </div>
          <div className={styles.search}>
            <input placeholder='Search' type='text' className={styles.input}/>
            <input value='Search' type='button' className={styles.btn} /> 
        </div>
      </div>
  </div>
  )
}

export default HideMenu;