import React,{useState} from 'react';
import styles from './Latestnews.module.css';
import  {useData}  from '../Public/useData';
import { nanoid } from 'nanoid';



function Latestnews() {

  const [times, setTimes]=useState([])
  const [texts,setTexts]=useState([])
  const BASE_URL = "https://www.lianatech.com/resources/blog.rss";
  const URL='https://corsproxy.io/?' + encodeURIComponent(`${BASE_URL}`);

  useData(URL)
  .then(data=>{
    setTimes(data.dates)
    setTexts(data.dscrpts)
  })

// Array deduplication
const uniqueDates=[...new Set(times)]
const uniqueTexts= [...new Set(texts)]


console.log(uniqueDates,uniqueTexts)


return (
    <div className={styles.content}>
        <p>Latest News</p>
        <ul className={styles.wrapper}>
        </ul>
    </div>
  )
}


export default Latestnews;


