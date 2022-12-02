import React, {useEffect} from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import {useData}  from '../Public/useData';

function GetPic() {
    const BASE_URL = "https://www.lianatech.com/resources/blog.rss";
    const URL='https://corsproxy.io/?' + encodeURIComponent(`${BASE_URL}`);
   
useEffect(
    ()=>{
    fetch(URL)
    .then(res=>console.log(res))
   

    },[URL]
)


  return (
    <div>getPic</div>
  )
}

export default GetPic;