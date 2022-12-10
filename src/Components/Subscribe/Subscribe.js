import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from './Subscribe.module.css';


function Subscribe() {

  const [email,setEmail]=useState("");
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Thank you for Subscribing Our Channel</h4>
          <p>
          Follow our story and get the news about our products and events.
          Your email address <strong><em>{email}</em></strong> will receive our latest news regularly!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={
            props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }




  return (
    <div className={styles.content}>
       <p className={styles.title}>Subscribe to Our Newsletter</p>
       <p className={styles.follow}>
        Follow our story and get the latest promotionial news about our products and events.
       </p>
      <Form className={styles.form}>
        <Form.Group className={styles.mb-3} controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" className={styles.subinput}   
          value={email}  
          onChange={e=>{
            setEmail(e.target.value)} 
            }
            onClick={e=>{e.stopPropagation()}}
            />
            
        </Form.Group>
        <Button variant="primary"  className={styles.subutton}  onClick={() => setModalShow(true)}>
            Subscribe
        </Button>
        <div className='clear'></div>
    </Form>
      {
        email &&
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
            setModalShow(false)
            setEmail("")
            } }/>
      }
    </div>
  )
}

export default Subscribe;

