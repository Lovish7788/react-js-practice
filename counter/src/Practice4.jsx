import { useState } from "react"

function Practice4(){
    const arr =['red', 'green', ,'blue','yellow']
    const [color , setcolor] =useState('black')
     
    
    return (
   <div style ={{background: color, height: "100vh",width:"100vw" }}>
    <h1 style={{color: "black"}}>This is practice 4</h1>
    {
        arr.map((c)=>(
            <button
            key={c} // react need unique keys for all list
            onClick={()=>setcolor(c)}
            style={{backgroundColor: c, color:"black" , border: "1px solid black" , gap: "10px"}}

            >
                {c}
                </button>
                ))
    }


   </div>

    )


}
export default Practice4