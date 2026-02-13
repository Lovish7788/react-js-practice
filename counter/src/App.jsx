import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [val , setval i.e function] = usestate(default)
  // with the help of set val we update val in our site
const [counter, setcounter ] = useState(0);
// const addvalue =()=>{
// setcounter(counter+1);
// console.log(counter
// );


// }
// const removevalue = (count)=>{
//  setcounter(counter-1);
//  console.log(counter);
 
 
 
 
// }
// const resetvalue=()=>{
// setcounter(0)
  
// }
// lets change logic that value never be in negative
const addvalue =()=>{
setcounter(counter+1);
}
const removevalue = ()=>{
 if(counter>0){
  setcounter(counter-1);
 }

}
const resetvalue=()=>{
setcounter(0)
}

 return (
    <>
     
     <h1>Our Conter projec</h1>
     <h2>Counter value {counter} 
      
     </h2>
     <button onClick={addvalue}>Add value</button>
     <button onClick={removevalue}>decrease value</button>
     <br />
     <button onClick={resetvalue}>Reset value</button>
        </>
  )
}

export default App
