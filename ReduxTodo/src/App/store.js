import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import reducer from "../features/todo/todoSlice";
// we use useSelector and use Dispatch
export const store = configureStore(
    {reducer: todoReducer })