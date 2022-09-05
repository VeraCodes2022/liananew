import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.content}>
      <div className={styles.footer}>
       <ul className={styles.left}>
          <li className={styles.subtitle}><strong>Liana Technologies</strong></li>
          <li className={styles.list}>
              <div className={styles.mesg}>
                <p> <strong>Sales and inquiries</strong></p>
                <p>Email:sales@lianatech.com</p>
                <p>Phone:+358 10 387 7053</p>
              </div>
              <button className={styles.btn}>Contact Us</button>
          </li>
       </ul>
       <div className={styles.right}>
          <ul className={styles.navtitle}>
            <li>Company</li>
            <li>Products</li>
            <li>Contact Us</li>
            <li>News</li>
            <li>Intranet</li>
          </ul>
          <ul className={styles.icons}>
            <div className={`${styles.fb} ${styles.href=""}`}></div>
            <div className={`${styles.tt} ${styles.href=""}`}></div>
            <div className={`${styles.in} ${styles.href=""}`}></div>
         </ul>
       </div>
      </div>
    </div>
  )
}

export default Footer;