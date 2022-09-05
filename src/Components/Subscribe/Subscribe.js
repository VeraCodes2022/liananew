import React,{useContext} from 'react';
import {AppContext} from '../../App';
import { useNavigate } from 'react-router-dom';
import styles from './Subscribe.module.css';

function Subscribe() {

const {email,setEmail}=useContext(AppContext);
const redirect=useNavigate();

const handleSubmit=()=>{
  email && redirect('./thank', {replace:true})

}

  return (
    <div className={styles.content}>
       <p className={styles.title}>Subscribe to Our Newsletter</p>
       <p className={styles.follow}>
        Follow our story and get the latest promotionial news about our products and events.
       </p>
       <form  onClick={handleSubmit}>
            <input 
              className={styles.email}  
              type="text" 
              placeholder="Your email address"
              value={email}
              onClick={e=>{e.stopPropagation()}}
              onChange={e=>{
                setEmail(e.target.value)
              }}
            />
          <input 
            className={styles.btn}   
            type="button" value="Subscribe"
          /> 
       </form>
    </div>
  )
}

export default Subscribe;