import {useEffect,useState} from "react"; 

export const useData= async function (url){
    // const [items,setItems]=useState([])
    const [fetchedData,setfetchedData]=useData([])
    const [dates, setDates]=useState([]);
    const [dscrpts, setDscrpts]=useState([]);

    useEffect(
        ()=>{
        try{
            fetch(url)
            .then(res=>res.text())
            .then(str=>new DOMParser().parseFromString(str,"text/xml")) 
            .then(data=>setfetchedData(data))
            .then(data=>{ return data.querySelectorAll("item") })
            .then(
                items=>{
                    for(let i=0, length=items.length; i<length;i++){
                        if(items[i].getElementsByTagName("pubDate")[0].innerHTML !=="" && 
                        items[i].getElementsByTagName("description")[0].innerHTML !==""){
                            (function(y){
                                setDates(prevDate=>(
                                [...prevDate,y.getElementsByTagName("pubDate")[0].textContent]
                                )
                                )
                                setDscrpts(
                                    prevEl=>(
                                        [...prevEl, y.getElementsByTagName("description")[0].textContent])
                                    )

                            })(items[i])
                        }
                    }
                 
                }
            )
           
        }catch(err){
            console.error(err)
        }

    },[url])

    return  {fetchedData,dates,dscrpts}
}






