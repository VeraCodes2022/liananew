const getTotal=(items)=>{
    const amounts=items.map(item=>item.number)
    const total=amounts.reduce((a,b)=>Number(a)+ Number(b),0)
    return total;
}

export default getTotal;