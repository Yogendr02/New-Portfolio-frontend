import { createSlice } from "@reduxjs/toolkit";
const navb = createSlice({
    name:"navb",
    initialState:{
        openmenu:false,
        lborder:"",
        bborder:""
    },
    reducers:{
        changemenu(state,action){
            state.openmenu = !(state.openmenu)
        },
        changeborder(state,action){
            state.lborder = action.payload
        },
        changebborder(state,action){
            state.bborder = action.payload
        }
    }
})

export const navbreducer = navb.reducer
export const {changemenu,changeborder,changebborder} = navb.actions