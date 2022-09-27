import React,{useEffect,useState} from "react"; 

// the custom hook is to fetch datas from URLs
const useData= async function (url){
    const [items,setItems]=useState([]);
    const [dates, setDates]=useState([]);
    const [dscrpts, setDscrpts]=useState([]);
    useEffect(
        ()=>{
        fetch(url) 
        .then(res=>res.text())  // data is in Document# format, first transform the Document# data to text 
        .then(str=>new DOMParser().parseFromString(str,"text/xml")) // then transform the text to XML format 
        .then(data=>{
                let items=data.getElementsByTagName("item");
                setItems(items)
                for (let i=0, length=items.length; i<length;i++){
                    // use immediate invokable function to catch each loop's i
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

    return  {items,dates,dscrpts}
}
export default useData;





