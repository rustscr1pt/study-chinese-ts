import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CurrentScreen from "../../structs&constants&enums/enums";
import {RootState} from "../mainStorage";

export const currentScreenStore = createSlice({
    name: "currentScreenStore",
    initialState: {
        value : CurrentScreen.Manage
    },
    reducers: {
        changeCurrentScreen(state, action : PayloadAction<CurrentScreen>) : void {
            if (state.value !== action.payload) {
                state.value = action.payload
            }
        }
    }
})

export const {changeCurrentScreen} = currentScreenStore.actions;
export const readCurrentScreen = (state : RootState) => {
    return state.currentScreenStore.value
}

export default currentScreenStore.reducer