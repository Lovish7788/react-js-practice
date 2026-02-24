import { createContext ,useContext } from "react";
export const Todocontext = createContext({
    // functionality of todo
    todos: [
     {
        id: 1,
        todo: "Todo msg",
        completed: false
     }
    ],
    // methods of Todo
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}

})

// this is custom hook

export const useTodo=()=>{
    return useContext(Todocontext)
}

export const Todoprovider = Todocontext.Provider;
