import React,{useState} from 'react';
import styles from './Latestnews.module.css';
import  {useData}  from '../Public/useData';
import { nanoid } from 'nanoid';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


function Latestnews() {
  const [times, setTimes]=useState([])
  const [texts,setTexts]=useState([])
  const BASE_URL = "https://www.lianatech.com/resources/blog.rss";
  // const CROSS_DOMAIN = 'https://cors-anywhere.herokuapp.com';
  // const cross="https://cors.bridged.cc";
  // const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
  const URL='https://corsproxy.io/?' + encodeURIComponent(`${BASE_URL}`);


  useData(URL)
  .then(data=>{
    setTimes(data.dates)
    setTexts(data.dscrpts)
  }
  )

let uniqueTexts=[...new Set(texts)]
let uniqueTimes=[...new Set(times)]
let news=[{'date': null, 'text':null}]

// console.log(uniqueTimes,uniqueTexts)
function createObj(){
  var times=null;
for(let i=0; i<uniqueTimes.length;i++){
  var a=uniqueTimes[i],b=uniqueTexts[i];
  (function(x,y){
    times=x

    news=[{"date":times, "text":y}]
  })(a,b)

}
  
}
createObj();
console.log(news)




return (
    <div className={styles.content}>
        <p>Latest News</p>
        <ul className={styles.wrapper}>
     
         
        </ul>
    </div>
  )
}


export default Latestnews;


//  <p className={styles.date} ref={dateRef}></p>
//  <p className={styles.message} ref={textRef}></p>

// {uniqueTexts.map(item=>{return <div key={nanoid()}>{item}</div>})}
