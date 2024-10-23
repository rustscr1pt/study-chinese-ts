import {configureStore} from "@reduxjs/toolkit";
import {currentScreenStore} from "./currentScreenStore/currentScreenStore";

export const application = configureStore({
    reducer: {
        currentScreen : currentScreenStore.reducer
    }
})

export type RootState = ReturnType<typeof application.getState>
export type AppDispatch = typeof application.dispatch;