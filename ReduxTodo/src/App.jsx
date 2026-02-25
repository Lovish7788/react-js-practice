import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1 className='bg-gray-700 text-3xl text-white'>Learn About React Redux</h1>
 <AddTodo />
 <Todos />
  </> )
}

export default App
