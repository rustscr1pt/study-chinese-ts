import {createSlice} from "@reduxjs/toolkit";
import CurrentScreen from "../../structs&constants&enums/enums";
import {RootState} from "../mainStorage";

export const currentScreen = createSlice({
    name: "currentScreen",
    initialState: {
        value : CurrentScreen.Manage
    },
    reducers: {
        changeCurrentScreen(state) {
            state.value = state.value === CurrentScreen.Manage ? CurrentScreen.Study : CurrentScreen.Manage
        }
    }
})

export const {changeCurrentScreen} = currentScreen.actions;
export const readCurrentScreen = (state : RootState) => {
    return state.currentScreen.value
}

export default currentScreen.reducer