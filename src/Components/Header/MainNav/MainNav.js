import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import styles from './MainNav.module.css';


function MainNav() {
   const [company,setCompany]=useState(false);
   const [products,setProducts]=useState(false);
   const [contact,setContact]=useState(false);
   const showCompany=()=>{setCompany(!company)};
   const hideCompany=()=>{setCompany(false)};
   const showProducts=()=>{setProducts(!products)};
   const hideProducts=()=>{setProducts(false)}
   const showContact=()=>{setContact(!contact)}
   const hideContact=()=>{setContact(false)}
   const redirect=useNavigate();
   const showmenu=()=>{
      redirect('./menu', {replace:true})
   }
  
   
  return (
    <div className={styles.nav}>
       <div className={styles.leftNav}>
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
            <li>
               <NavDropdown title="Company" id="collasible-nav-dropdown" 
               show={company} onMouseEnter={showCompany} 
               onMouseLeave={hideCompany}>
                  <NavDropdown.Item eventKey="1" id='text3'>Liana History</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2" id='text4' >Liana Team</NavDropdown.Item>
               </NavDropdown>
            </li>
            <li>
               <NavDropdown title="Products" id="collasible-nav-dropdown" 
               show={products} onMouseEnter={showProducts} 
               onMouseLeave={hideProducts}>
                <NavDropdown.Item eventKey="3" id='text1'>SaaS</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4" id='text2' >PaaS</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4" id='text2' >Iaas</NavDropdown.Item>
               </NavDropdown>
               </li>
            <li>
               <NavDropdown title="Contact" id="collasible-nav-dropdown" 
               show={contact} onMouseEnter={showContact} 
               onMouseLeave={hideContact}>
                  <NavDropdown.Item eventKey="3" id='text1'>Email:abc@gmail.com</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4" id='text2' >Phone:098 098 00</NavDropdown.Item>
               </NavDropdown>
            </li>
         </div>
       </div>
       <div className={styles.search}>
          <input placeholder='Search' type='text' className={styles.input}/>
          <input value='Search' type='button' className={styles.btn} /> 
       </div>
    </div>
  )
}

export default MainNav;