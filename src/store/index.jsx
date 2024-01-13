import {navbreducer,changemenu,changeborder,changebborder} from "./navb"

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer:{
        currentmenu: navbreducer,
    },
});

export {changemenu,store,changeborder,changebborder}