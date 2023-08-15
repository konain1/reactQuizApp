
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    quizData:[]
}

const quizSlice = createSlice({

    name:"quizSlice",
    initialState,
    reducers:{

        addData:(state,{payload})=>{
            state.quizData = payload
        }
    }
   
})

export const {addData} = quizSlice.actions;

export default quizSlice.reducer;