import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoItem({ todo }) {
    const [istodoeditable, setIstodoeditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    
    // FIX 1: Destructure 'toggleComplete' (matches your context)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIstodoeditable(false)
    }

    // FIX 2: We don't really need a middle-man function 'togglecomplete'
    // but if you keep it, make sure it calls the right context function.

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                // FIX 3: Call the context function directly here
                onChange={() => toggleComplete(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    istodoeditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!istodoeditable}
            />
            
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (istodoeditable) {
                        editTodo();
                    } else setIstodoeditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {istodoeditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;