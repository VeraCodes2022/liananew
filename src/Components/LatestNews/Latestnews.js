import React,{useState} from 'react';
import styles from './Latestnews.module.css';
import  {useData}  from '../Public/useData';
import { nanoid } from 'nanoid';

function Latestnews() {

  const [times, setTimes]=useState("")
  const [texts,setTexts]=useState("")
  const BASE_URL = "https://www.lianatech.com/resources/blog.rss";
  const URL='https://corsproxy.io/?' + encodeURIComponent(`${BASE_URL}`);

  useData(URL)
  .then(data=>{
    setTimes(data.dates)
    setTexts(data.dscrpts)
  })


let uniqueDates=[...new Set(times)]
let uniqueTexts= [...new Set(texts)]
let news=[]
const getNews=()=>{
  for( var i=0;i<uniqueDates.length;i++){
    var dates=uniqueDates[i].split(' ');
    var pubDates=dates.slice(0,4).join(' ');
    var description=uniqueTexts[i];
    news.push({pubDates,description})
}

}
getNews()


return (
    <div className={styles.content}>
        <p>Latest News</p>
        <ul className={styles.wrapper}>
            {news.slice(0,3).map(
              item=>(<li key={nanoid()}  className={styles.newslist}>
                <p className={styles.date}>{item.pubDates}</p>
                <p className={styles.message}>{item.description}</p>
              </li>)
            )}
  
        </ul>
    </div>
  )
}


export default Latestnews;


