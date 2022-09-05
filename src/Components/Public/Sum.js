import React from 'react';

const getSum=(arr)=>{
    const total=arr.reduce(
        (sum,acc)=>sum+acc,0
    )
 return total;
}

export default getSum;