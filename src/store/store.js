import { configureStore } from "@reduxjs/toolkit";
import {
  addExercise,
  exerciseReducer,
  removeExercise,
  selectedExercises,
} from "./reducers/slices/exerciseSlice";
const store = configureStore({ reducer: { exerciseReducer } });
export { store, selectedExercises, addExercise, removeExercise };
