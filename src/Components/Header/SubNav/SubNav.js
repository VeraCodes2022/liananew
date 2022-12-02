import React from 'react';
import styles from './SubNav.module.css';

function SubNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.wrapper}>
          <p>News</p>
          <p>Intranet</p>
          <div className={styles.dropdown}>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle"
                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">In English</a></li>
                  <li><a className="dropdown-item" href="#">In Finnish</a></li>
                  <li><a className="dropdown-item" href="#">In Swedish</a></li>
                </ul>
            </div>
          </div>
    </div>
  </div>
  )
}

export default SubNav;