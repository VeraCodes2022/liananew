import React,{useEffect,useState,useRef} from 'react';
import styles from './Latestnews.module.css';
import  useData  from '../Public/useData';
import { nanoid } from 'nanoid';


function Latestnews() {
  const [times, setTimes]=useState([])
  const [texts,setTexts]=useState([])
  const BASE_URL = "https://www.lianatech.com/resources/blog.rss";
  const CROSS_DOMAIN = 'https://cors-anywhere.herokuapp.com';
  const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
  var dateRef=useRef(null);
  var textRef=useRef(null);


  var users=[
    {'date': 'Date1', 'text':'Text1'},
    {'date': 'Date2', 'text':'Text2'},
    {'date': 'Date3', 'text':'Text3'},
    {'date': 'Date4', 'text':'Text4'},
  ]


useData(REQUEST_URL)
.then(
  results=>{
    setTimes(results.dates)
    setTexts(results.dscrpts)
  }
)

const uniqueTimes=[...new Set(times)]
const uniqueTexts=[...new Set(texts)];
var news={}



// dateRef.current.innerHTML=news;
// textRef.current.innerHTML=news



  return (
    <div className={styles.content}>
        <p>Latest News</p>
        <ul className={styles.wrapper}>
     
            {users.map (
              user=>{return (<li key={nanoid()}>
                <p className={styles.date}>{user.date}</p>
                <p className={styles.message}>{user.text}</p>
              </li>)}
            )}
         
        </ul>
    </div>
  )
}

export default Latestnews;


//  <p className={styles.date} ref={dateRef}></p>
//  <p className={styles.message} ref={textRef}></p>

// {uniqueTexts.map(item=>{return <div key={nanoid()}>{item}</div>})}
