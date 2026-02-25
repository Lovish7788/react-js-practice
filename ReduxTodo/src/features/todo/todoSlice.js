import { createSlice , nanoid} from "@reduxjs/toolkit";
const initialState ={
    todos: [{id:1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // create a reducer
    reducers:{
        // properties or function
        addTodo: (state , action)=>{const todo =
            {
                id: nanoid(),
                text: action.payload
            }
        state.todos.push(todo)}, // state give action to initial state and action means values


        removoTodo: (state , action)=>{
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload )
        },

        updateTodo : (state, action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, text: action.payload}: todo )
        }
        
    }
})

// we have to export 2 times 
//1 individual functionalities
export const {addTodo, removoTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer