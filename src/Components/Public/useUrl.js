// this customized hook is for fetching banner img src from API

import React,{useState,useEffect} from 'react';

export const useHook= async function(url) {

    const [imgSrc,setImgSrc]=useState("")

    
    useEffect(
        ()=>{
            fetch(url)
            .then(res=>res.text())
            .then(str=>new window.DOMParser().parseFromString(str,'text/xml'))
            .then(data=>{
                var item=data.getElementsByTagName('item')[3];
                var media=item.getElementsByTagName('media:content')[0];
                var url=media.getAttribute("url")
                setImgSrc(url)
            })

        },[url]
    )
  return {imgSrc}
}