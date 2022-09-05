import React from 'react';
import styles from './MiddleNav.module.css';
import {ClientsData} from '../Data/ClientsData';
import {Employees} from '../Data/EmployeeData';
import {Users} from '../Data/UserData';

function MiddleNav() {
// calculate the animated number of clients
  const client=[];
  for(let i=0; i<ClientsData.length;i++){
    let num=ClientsData[i].number;
    client.push(num)
  }
  let clientSum=client.reduce((prev,curr)=>{
    return Number(prev)+ Number(curr)
  });
// calculate the animated number of employees
  const employee=[];
  for(let i=0; i<Employees.length;i++){
    let num=Employees[i].number;
    employee.push(num)
  }
  let employeeSum=employee.reduce((prev,curr)=>{
    return Number(prev)+ Number(curr)
  });
// calculate the animated number of daily users
  const user=[];
  for(let i=0; i<Users.length;i++){
    let num=Users[i].number;
    user.push(num)
  }
  let userSum=user.reduce((prev,curr)=>{
      return Number(prev)+ Number(curr)
    });

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