import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StudyObject} from "../../structs&constants&enums/structs";

export const studyObjectStore = createSlice({
    name : "studyObjectStore",
    initialState : {
        value : [] as StudyObject[]
    },
    reducers : {
        addToObjectStore(state, action : PayloadAction<StudyObject>) : void {
            state.value.push(action.payload)
        }
    }
})