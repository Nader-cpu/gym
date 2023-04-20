import { createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "selectedExercises",
  initialState: {
    data: [],
  },
  reducers: {
    addExercise: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    removeExercise: (state, action) => {
      return {
        ...state,
        data: state.data.filter(
          (exercise) => exercise.name !== action.payload.name
        ),
      };
    },
  },
});

export const { addExercise, removeExercise } = exerciseSlice.actions;

export const { selectedExercises } = exerciseSlice;

export const exerciseReducer = exerciseSlice.reducer;
