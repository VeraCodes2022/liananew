import React,{useContext} from 'react';
import {AppContext} from '../../App';
import { useNavigate } from 'react-router-dom';
import styles from './Thank.module.css';

function Thank() {

const {email}=useContext(AppContext);

    const redirect=useNavigate();
    const redirectPage=()=>{
        redirect('/', {replace:true})
    }

  return (
        <div className={styles.thank}>
            <span 
            className={styles.close}
            onClick={redirectPage}
            >&times;</span>
            <h3>
            Thank You! 😊
            </h3>
            <h5>
                Right now… there are 22000 incredible people (like you) who have subscribed to our channel.
                Your Email Address: <span className={styles.emailadd}><i>{email}</i></span> will receive our latest news regularly!
            </h5>
            <button 
            className={styles.btn}
            onClick={redirectPage}
            >Back to Homepage</button>
        </div>
  )
}

export default Thank;