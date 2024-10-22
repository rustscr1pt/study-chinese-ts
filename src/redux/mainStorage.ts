import {configureStore} from "@reduxjs/toolkit";
import {currentScreen} from "./currentScreen/currentScreen";

const application = configureStore({
    reducer: {
        currentScreen : currentScreen.reducer
    }
})

export type RootState = ReturnType<typeof application.getState>
export type AppDispatch = typeof application.dispatch;