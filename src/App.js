import GenericDropdown from "./components/dropdown";
import GenericTable from "./components/dataTable";
import { useState } from "react";

function App() {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const biceps = [
    {
      name: "Reverse Curl",
      code: "RC",
      muscleGroup: "Biceps",
      sets: "12-10-8",
    },
    {
      name: "Wide-Grip Curl",
      code: "WGC",
      muscleGroup: "Biceps",
      sets: "10-10-10-10",
    },
    {
      name: "Conventional Barbell Curl",
      code: "CBC",
      muscleGroup: "Biceps",
      sets: "12-10-8",
    },
    {
      name: "Dumbbell Curl",
      code: "DC",
      muscleGroup: "Biceps",
      sets: "12-10-8",
    },
  ];

  const triceps = [
    {
      name: "Triceps Kickbacks",
      code: "TK",
      muscleGroup: "Triceps",
      sets: "12-10-8",
    },
    {
      name: "Triceps Dips",
      code: "TD",
      muscleGroup: "Triceps",
      sets: "10-10-10-10",
    },
    {
      name: "Rope Pushdowns",
      code: "RP",
      muscleGroup: "Triceps",
      sets: "12-10-8",
    },
    {
      name: "Decline Triceps Extension",
      code: "DTE",
      muscleGroup: "Triceps",
      sets: "12-10-8",
    },
  ];

  const back = [
    {
      name: "Bent Over Row ",
      code: "BOR",
      muscleGroup: "Back",
      sets: "12-10-8",
    },
    {
      name: "Pull-up",
      code: "P",
      muscleGroup: "Back",
      sets: "12-10-8",
    },
    {
      name: "Deadlift ",
      code: "D",
      muscleGroup: "Back",
      sets: "12-10-8",
    },
    {
      name: "Pull-over ",
      code: "P",
      muscleGroup: "Back",
      sets: "12-10-8",
    },
  ];

  const chest = [
    {
      name: "Flat Bench Press",
      code: "FBP",
      muscleGroup: "Chest",
      sets: "12-10-8",
    },
    {
      name: "Incline Bench Press ",
      code: "IBP",
      muscleGroup: "Chest",
      sets: "12-10-8",
    },
    {
      name: "Decline Bench Press ",
      code: "DBP",
      muscleGroup: "Chest",
      sets: "12-10-8",
    },
    {
      name: "Chest Dip ",
      code: "CD",
      muscleGroup: "Chest",
      sets: "12-10-8",
    },
  ];

  const legs = [
    {
      name: "Back Squat",
      code: "BS",
      muscleGroup: "Legs",
      sets: "12-10-8",
    },
    {
      name: "Front Squat",
      code: "FS",
      muscleGroup: "Legs",
      sets: "12-10-8",
    },
    {
      name: "Romanian Deadlift",
      code: "RD",
      muscleGroup: "Legs",
      sets: "12-10-8",
    },
    {
      name: "Walking Lunges",
      code: "WL",
      muscleGroup: "Legs",
      sets: "12-10-8",
    },
  ];

  const shoulders = [
    {
      name: "Overhead Press",
      code: "OP",
      muscleGroup: "Shoulders",
      sets: "12-10-8",
    },
    {
      name: "Dumbbell Shoulder Press",
      code: "DSP",
      muscleGroup: "Shoulders",
      sets: "12-10-8",
    },
    {
      name: "Arnold Press",
      code: "AP",
      muscleGroup: "Shoulders",
      sets: "12-10-8",
    },
    {
      name: "Push Press",
      code: "PP",
      muscleGroup: "Shoulders",
      sets: "12-10-8",
    },
  ];
  return (
    <>
      <GenericDropdown
        placeHolder={"Biceps"}
        exercises={biceps}
        selectedExercises={selectedExercises}
        change={setSelectedExercises}
      />
      <GenericDropdown
        placeHolder={"Triceps"}
        exercises={triceps}
        selectedExercises={selectedExercises}
        change={setSelectedExercises}
      />
      <GenericDropdown
        placeHolder={"Back"}
        exercises={back}
        selectedExercises={selectedExercises}
        change={setSelectedExercises}
      />
      <GenericDropdown
        placeHolder={"Chest"}
        exercises={chest}
        selectedExercises={selectedExercises}
        change={setSelectedExercises}
      />
      <GenericDropdown
        placeHolder={"Legs"}
        exercises={legs}
        selectedExercises={selectedExercises}
        change={setSelectedExercises}
      />
      <GenericDropdown
        placeHolder={"Shoulders"}
        exercises={shoulders}
        selectedExercises={selectedExercises}
        change={setSelectedExercises}
      />

      <GenericTable
        selectedExercises={selectedExercises}
        setSelectedExercises={setSelectedExercises}
      />
    </>
  );
}

export default App;
