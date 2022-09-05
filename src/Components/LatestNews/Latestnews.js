import React,{useEffect,useState} from 'react';
import styles from './Latestnews.module.css';

function Latestnews() {
 
const [date,setDate]=useState("");
const [description,setDescription]=useState("")


  const BASE_URL = "https://www.lianatech.com/resources/blog.rss";
  const CROSS_DOMAIN = 'https://cors-anywhere.herokuapp.com';
  const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;



  useEffect(

    ()=>{
        fetch(REQUEST_URL)
        .then(
          response=>response.text()
      )
        .then(
            str=>new window.DOMParser().parseFromString(str,"text/xml")
        )
        .then (
          (data)=>{ 
            let items=data.getElementsByTagName("item");
            for(let i=0;i<items.length;i++){
              let date=items[i].getElementsByTagName("pubDate")[0].textContent;  
              let  desc=items[i].getElementsByTagName("description")[0].textContent;
              setDate(date)
              setDescription(desc)
            }
          }
        )
    },[REQUEST_URL]
  )

console.log(date,description)

  return (
   
    <div className={styles.content}>
        <p>Latest News</p>
        <ul className={styles.wrapper}>
        
          <li>
            <p className={styles.date}>{date}</p>
            <p className={styles.message}>{description}</p>
          </li>
          <li>
            <p className={styles.date}>{date}</p>
            <p className={styles.message}>{description}</p>
          </li>
          <li>
            <p className={styles.date}>{date}</p>
            <p className={styles.message}>{description}</p>
          </li>
        </ul>
    </div>
  )
}

export default Latestnews;


