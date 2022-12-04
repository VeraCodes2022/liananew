import React from 'react';
import styles from './TopNav.module.css';

function TopNav() {
  return (
    <div className={styles.topNav}>
        <div className={styles.container}>
            <ul className={styles.news}>
                <li><a className={styles.rtop} href="#">News</a></li>
                <li><a className={styles.rtop}  href="#">Intranet</a></li>
            </ul>
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

export default TopNav;