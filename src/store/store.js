import { configureStore } from "@reduxjs/toolkit";
import {
	addExercise,
	exerciseReducer,
	removeExercise,
} from "./reducers/slices/exerciseSlice";
const store = configureStore({ reducer: { exerciseReducer } });
export { store, addExercise, removeExercise };
