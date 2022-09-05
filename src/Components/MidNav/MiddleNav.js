import React from 'react';
import styles from './MiddleNav.module.css';
import {ClientsData} from '../Data/ClientsData';
import {Employees} from '../Data/EmployeeData';
import {Users} from '../Data/UserData';
import getTotal from '../Public/GetTotal';

function MiddleNav() {

  let clientSum=getTotal(ClientsData)
  let employeeSum=getTotal(Employees)
  let userSum=getTotal(Users)


  return (
    <div className={styles.nav}>
        <ul className={styles.cpc}>
          <li className={`${styles.company}${styles.href=""}`}>
              <div className={styles.companycover}> 
                <p className={styles.text}>Company</p>
              </div>
          </li>
          <li className={`${styles.products} ${styles.href=""}`}>
              <div className={styles.productscover}>
                  <p className={styles.text}>Products</p>
              </div>
          </li>
          <li className={`${styles.contact} ${styles.href=""}`}>
              <div className={styles.contctcover}>
                <p className={styles.text}>Contact Us</p>
              </div>
          </li>
        </ul>
        <ul className={styles.ceu}>
          <li>
              <div className={`${styles.clients} ${styles.href=""}`}></div>
              <div className={styles.data}>
                <p className={styles.num}>{clientSum}</p>
                <p>&nbsp;Clients&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
          </li>
          <li>
              <div className={`${styles.employees} ${styles.href=""}`}></div>
              <div className={styles.data}>
                <p className={styles.num}>{employeeSum}</p>
                <p>Employees</p>
              </div>
          </li>
          <li>
            <div className={`${styles.users} ${styles.href=""}`}></div>
            <div className={styles.data}>
              <p className={styles.num}>{userSum}</p>
              <p>Daily Users</p>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default MiddleNav;