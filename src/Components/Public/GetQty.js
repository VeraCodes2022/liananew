import React from 'react';

const GetQty=(arr,finalArr)=>{
    for( let i=0; i<arr.length;i++){
        let num=arr[i].number
        finalArr.push(Number(num))
    }
    return finalArr
}


export default GetQty;