import {useEffect,useState} from "react"; 
// this customized hook is for fetching dates' and descriptions' innerHTML from item tags from the given  API

export const useData= async function (url){

    const [dates, setDates]=useState([]);
    const [dscrpts, setDscrpts]=useState([]);
    // const [news,setNews]=useState(null)
   

  
    useEffect(
        ()=>{
        try{
            fetch(url)
            .then(res=>res.text())
            .then(str=>new DOMParser().parseFromString(str,"text/xml")) 
            .then(data=>{ return data.querySelectorAll("item") })
            .then(
                items=>{
                    for(let i=0, length=items.length; i<length;i++){
                        if(items[i].getElementsByTagName("pubDate")[0].innerHTML !=="" && 
                        items[i].getElementsByTagName("description")[0].innerHTML !==""){
                            (function(y){
                            var news={}
                            setDates(prevDate=>(
                                 [...prevDate, y.getElementsByTagName("pubDate")[0].textContent] 
                                )
                                );
                             setDscrpts(
                                    prevEl=>(
                                        [...prevEl, news.text=y.getElementsByTagName("description")[0].textContent])
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

    return  {dates,dscrpts}
}






