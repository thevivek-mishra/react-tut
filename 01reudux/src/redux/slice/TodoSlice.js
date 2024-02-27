import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todos',
    initialState: [],
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false
            }
            state.push(todo)
        },
        deleteTodo: (state,action)=>{
            return state.filter(todo =>todo.id !==action.payload.id)
            
        },
        toggleComplete: (state,action)=>{
            const index =state.findIndex((todo)=>todo.id ===action.payload.id)
            state[index].completed =action.payload.completed
        }
    }
})

export const {addTodo,deleteTodo,toggleComplete} =todoSlice.actions;
export default todoSlice.reducer;
