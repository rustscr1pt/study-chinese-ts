import {createSlice} from "@reduxjs/toolkit";
import CurrentScreen from "../../structs&constants&enums/enums";
import {RootState} from "../mainStorage";

export const currentScreenStore = createSlice({
    name: "currentScreenStore",
    initialState: {
        value : CurrentScreen.Manage
    },
    reducers: {
        changeCurrentScreen(state) {
            state.value = state.value === CurrentScreen.Manage ? CurrentScreen.Study : CurrentScreen.Manage
        }
    }
})

export const {changeCurrentScreen} = currentScreenStore.actions;
export const readCurrentScreen = (state : RootState) => {
    return state.currentScreen.value
}

export default currentScreenStore.reducer