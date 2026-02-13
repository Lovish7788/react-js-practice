import { use } from "react";
import { useState } from "react";

/*
Exercise 1: The Step-Bounded Counter
Build a counter that starts at 10.

Add two buttons: "Step Up" and "Step Down".

Add an input field where the user can type a "Step Value" (e.g., 5).

When "Step Up" is clicked, the counter should increase by the value in the input field.

Goal: Practice handling numbers from input fields (don't forget Number(e.target.value)!).
*/
function Practice() {
    const [val , setval] = useState(0)
    const [step , setStep]= useState(1)
    const stepup =()=>{
     setval(val+step)

    }
    const stepdown =()=>{

        // const num = parseInt(document.querySelector('#stepdown').value)
        setval(val-step)

    }
    const reset =()=>{
        setval(0)
        setStep(1)
    }

  return (
    <>
      <h1>Counter value is {val}</h1>  
      <h3>The current step size is: {step}</h3> 
     <input
      type="number" 
      value={step}
      onChange={(e)=>
        setStep(Number(e.target.value))}
        
        />

     
        
      <button onClick={stepup}>Stepup</button>
      <button onClick={stepdown}>Stepdown</button>
      <br />
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Practice;
