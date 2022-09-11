import React,{useEffect, useState} from "react"; 


const getData=async()=>{
    var infos={}
    infos.time=[]
    infos.descrpt=[]
    const BASE_URL="https://www.lianatech.com/resources/blog.rss";
    const CROSS_DOMAIN = 'https://cors-anywhere.herokuapp.com';
    const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
    await fetch(REQUEST_URL)  
    .then(res=>res.text())
    .then(str=>new DOMParser().parseFromString(str,"text/xml"))
    .then(data=>{return items=data.querySelectorAll("item")})
    for ( var i=0; i<items.length;i++){
      (function(y){
     infos.time[i]= y.getElementsByTagName("pubDate")[0].textContent;
     infos.descrpt[i]=y.getElementsByTagName("description")[0].textContent;
    })(items[i])
  }
 return infos;
}


const printDatas= async ()=>{
    const feeddatas=(await getData())
    const texts=feeddatas.descrpt;
    const times=feeddatas.time;
    console.log(texts,times)
  }
printDatas()

export default printDatas;