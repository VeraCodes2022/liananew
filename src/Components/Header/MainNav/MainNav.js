import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainNav.module.css';

function MainNav() {
   const redirect=useNavigate();
   const showmenu=()=>{
      redirect('./menu', {replace:true})
   }
   
  return (
    <div className={styles.nav}>
       <ul className={styles.leftNav}>
         <div className={styles.logo}></div>
         <div 
            className={styles.dots}
            onClick={showmenu}
         >
            <div className={styles.dot}></div>
           <div className={styles.dot}></div>
           <div className={styles.dot}></div>
         </div>
         <div className={styles.navbar}>
            <li><a href='./'>Company</a></li>
            <li><a href='./'>Products</a></li>
            <li><a href='./'>Contact Us</a></li>
         </div>
       </ul>
       <div className={styles.search}>
          <input placeholder='Search' type='text' className={styles.input}/>
          <input value='Search' type='button' className={styles.btn} /> 
       </div>
    </div>
  )
}

export default MainNav;