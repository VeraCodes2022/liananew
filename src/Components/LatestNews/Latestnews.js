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
  const [data1,setData1]=useState("")
  const [data2,setData2]=useState("")
  // var dateRef=useRef(null);
  // var textRef=useRef(null);

  useData(REQUEST_URL)
  .then(
    results=>{
      setTimes(results.dates)
      setTexts(results.dscrpts)
    }
  );
const uniqueTimes=[...new Set(times)];
const uniqueTexts=[...new Set(texts)];

var news=[
  {'time':"", 'text':""}
]
function content(){
  for (let i=0, length=uniqueTexts.length; i< length;i++){
   (
    function(x,y){
      news.time=y
      news.text=x;
   
    }
   )(uniqueTexts[i],uniqueTimes[i])
}
}
content()
console.log(news)




  return (
    <div className={styles.content}>
        <p>Latest News</p>
        <ul className={styles.wrapper}>
     
          {
            news.map(
             (item)=>{return <li key={nanoid()}>
              <p className={styles.date}>{item.time}</p>
              <p className={styles.message}>{item.text}</p>
             </li>}
            )
          }
         
        </ul>
    </div>
  )
}

export default Latestnews;


//  <p className={styles.date} ref={dateRef}></p>
//  <p className={styles.message} ref={textRef}></p>

// {uniqueTexts.map(item=>{return <div key={nanoid()}>{item}</div>})}
