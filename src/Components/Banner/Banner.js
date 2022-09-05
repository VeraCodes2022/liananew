import React from 'react';
import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={`${styles.banner} ${styles.href=""}`}>
      <div className={styles.cover}>
        <h1>Software Fueling Digital Marketing</h1>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default Banner;