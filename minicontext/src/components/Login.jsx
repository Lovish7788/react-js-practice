import { useContext, UseContext, useState } from 'react'
import { UserContext } from '../Context/Usercontext'
export default function Login(){
    const [username, setUsername] = useState('')
    const [password , setPassword] = useState('')

    // **********************************************************
const {setUser} = useContext(UserContext)
const handlesubmit =(e)=>{
e.preventDefault()
setUser({username, setUsername})

}
// ****************************************************************
    return(
<div className='bg-amber-400 w-full h-full'>
    <label >Login</label>
    <input type='text'
    
    className=' p-0.5 ml-1 border-2 border-l-black'
    placeholder='Username'
    value={username}
    onChange={(e)=>{setUsername(e.target.value)}}
    />
    <label >Password</label>
    
    <input type='password'
    className='p-0.5 ml-1 border-2 border-l-black mr-1.5'
    placeholder='password'
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}
    />
    <button onClick={handlesubmit} >Submit</button>
    </div>
    )
}



