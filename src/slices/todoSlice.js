import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {list: []},
    reducers: {
        addTodo(state, action){
            state.list.push(action.payload)
        },


        deleteTodo(state, action){
            state.list = state.list.filter((todo)=> todo?.id !== action.payload);

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