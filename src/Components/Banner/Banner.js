import React,{useState} from 'react';
import {useHook} from '../Public/useUrl';
import styles from './Banner.module.css';

function Banner() {

  const [imgUrl,setImgUrl]=useState('');
  const BASE_URL = "https://www.lianatech.com/resources/blog.rss";
  const URL='https://corsproxy.io/?' + encodeURIComponent(`${BASE_URL}`);

  useHook(URL)
  .then(data=>{
    setImgUrl(data.imgSrc)
  }) 

  return (
    // <div className={`${styles.banner} ${styles.href=""}`}>
    //   <div className={styles.cover}>
    //     <h1>Software Fueling Digital Marketing</h1>
    //     <button>Learn More</button>
    //   </div>
    // </div>
    <center>
      <div className={styles.wrapper}>
          <img src={imgUrl} alt="" className={styles.banner}/>
          <div className={styles.cover}>
            {/* <h1>Software Fueling Digital Marketing</h1> */}
            <button>Learn More</button>
          </div> 

      </div>
    </center>
  )
}

export default Banner;