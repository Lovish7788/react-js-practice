import { useState } from "react"

function Practice3(){

    const [isloggedin , setLoggedIn] = useState(true)

    const aut=()=>{
        setLoggedIn(!isloggedin)
    }
    return(
       <>
       <h1>{isloggedin ?" welcome student" :" Please log in"}</h1>
      
           {/* syntax is condition ? if true : if false */}
            {isloggedin ? 
                (<button onClick={aut}>Logout</button>):
                (<button onClick={aut}>Login</button>)
            }
      



       </>
       
      
    )
}

export default Practice3