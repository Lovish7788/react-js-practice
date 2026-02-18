import {useEffect, useState} from 'react'
function Usedcurrencyinfo(currency){
    const [data, setdata]= useState({})
    useEffect(()=>{
        
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        .catch((err)=>{console.log("Api ERROR!!", err)})
    },[currency])
    console.log(data);
    return data
    

}

export default Usedcurrencyinfo