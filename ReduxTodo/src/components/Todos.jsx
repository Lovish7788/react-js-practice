import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removoTodo } from '../features/todo/todoSlice'

function Todos(){
    // in useSelector we can access state and from state we can retrive values from store
    const todos = useSelector(state => state.todos)
    const dispacth = useDispatch()

    return(
        <>
<div>TODOS</div>
<ul className='list-none'>
{todos.map((todo)=>(

    <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
        <div className='text-white'>{todo.text}</div>
        <button onClick={()=> dispacth(removoTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">X</button>
    </li>


)
)}
</ul>
</>
    )
}

export default Todos