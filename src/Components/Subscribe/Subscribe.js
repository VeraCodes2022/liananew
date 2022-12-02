import React,{useContext} from 'react';
import {AppContext} from '../../App';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Subscribe.module.css';

function Subscribe() {

const {email,setEmail}=useContext(AppContext);
const redirect=useNavigate();

const handleSubmit=()=>{
  email && redirect('./thank', {replace:true})
  setEmail("")

}

  return (
    <div className={styles.content}>
       <p className={styles.title}>Subscribe to Our Newsletter</p>
       <p className={styles.follow}>
        Follow our story and get the latest promotionial news about our products and events.
       </p>
      <Form className='form' onClick={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" className='sub-input'   
          value={email}  
          onChange={e=>{setEmail(e.target.value)}}/>
        </Form.Group>
        <Button variant="primary" type="submit" className='sub-button'>
          Submit
        </Button>
        <div className='clear'></div>
    </Form>
    </div>
  )
}

export default Subscribe;

// onClick={e=>{e.stopPropagation()}}