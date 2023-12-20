import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    initialState: {list: JSON.parse(localStorage.getItem("todos")) || []},
    name: 'todo',
    reducers: {
        addTodo(state, action){
            state.list.push(action.payload)
            localStorage.setItem("todos", JSON.stringify(state.list))
        },


        deleteTodo(state, action){
            state.list = state.list.filter((todo)=> todo?.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.list))
        },

        uptadeStatus(state, action){
            const uptadeAt = new Date().toLocaleString();
            state.list=  state.list.map((todo)=> todo.id === action.payload ? {...todo, isDone: true, uptadeAt} : todo)
        }
    }
})

const {actions, reducer} = todoSlice;

export const {addTodo, deleteTodo, uptadeStatus} = actions;

export default reducer;