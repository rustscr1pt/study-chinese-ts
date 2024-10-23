import {configureStore} from "@reduxjs/toolkit";
import {currentScreenStore} from "./currentScreenStore/currentScreenStore";
import {studyObjectStore} from "./studyObjectStore/studyObjectStore";

export const application = configureStore({
    reducer: {
        currentScreenStore : currentScreenStore.reducer,
        studyObjectStore : studyObjectStore.reducer
    }
})

export type RootState = ReturnType<typeof application.getState>
export type AppDispatch = typeof application.dispatch;