import React,{useEffect,useState} from 'react';
import styles from './Latestnews.module.css';

function Latestnews() {

var aa=[]
var dd=[]

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

            function getXMLData(){
              let items=data.getElementsByTagName("item");    
              for(let i=0;i<items.length;i++)
                 return (function (y) { 
                      let cc=y[0].getElementsByTagName("pubDate")[0].textContent;
                      let bb=y[0].getElementsByTagName("description")[0].textContent;
                       aa[i]=cc
                       dd[i]=bb
                     }
                  )([items[i]])
            }


            getXMLData()
        }
            
        )
    },[REQUEST_URL]
  )

//  let dates=y.getElementsByTagName("pubDate")[0].textContent; 
// let desc=y.getElementsByTagName("description")[0].textContent;
console.log(aa,dd)


  return (
   
    <div className={styles.content}>
        <p>Latest News</p>
        <ul className={styles.wrapper}>
        
          <li>
            <p className={styles.date}>{}</p>
            <p className={styles.message}>{}</p>
          </li>
          <li>
            <p className={styles.date}>{}</p>
            <p className={styles.message}>{}</p>
          </li>
          <li>
            <p className={styles.date}>{}</p>
            <p className={styles.message}>{}</p>
          </li>
        </ul>
    </div>
  )
}

export default Latestnews;


