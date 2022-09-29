import React,{useEffect,useState} from "react"; 

const useData= async function (url){
    const [dates, setDates]=useState([]);
    const [dscrpts, setDscrpts]=useState([]);


    useEffect(
        ()=>{
        fetch(url) 
        .then(res=>res.text())
        .then(str=>new DOMParser().parseFromString(str,"text/xml")) 
        .then(data=>{
                let items=data.getElementsByTagName("item");
                for (let i=0, length=items.length; i<length;i++){
              
                 (function(y){
                    setDates(prevDate=>(
                    [...prevDate,
                        y.getElementsByTagName("pubDate")[0].textContent])
                    )
                    setDscrpts(
                        prevEl=>(
                            [...prevEl, y.getElementsByTagName("description")[0].textContent])
                        )
                    }
                    )(items[i])

               
                }
            
        })
        },[url]
    )
 
    return  {dates,dscrpts}
}
export default useData;





