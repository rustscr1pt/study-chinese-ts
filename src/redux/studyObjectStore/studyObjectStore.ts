import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StudyObject} from "../../structs&constants&enums/structs";
import {RootState} from "../mainStorage";

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

export const {addToObjectStore} = studyObjectStore.actions;
export const readStudyObjectStore = (state : RootState) => {
    return state.studyObjectStore.value
}

export default studyObjectStore.reducer;