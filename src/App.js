import FilterDemo from "./components/dropdown";
import GridLinesDemo from "./components/dataTable";
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
  return (
    <>
      <FilterDemo
        placeHolder={"Biceps"}
        exercises={biceps}
        selectedExercises={selectedExercises}
        change={setSelectedExercises}
      />
      <FilterDemo
        placeHolder={"Triceps"}
        exercises={triceps}
        selectedExercises={selectedExercises}
        change={setSelectedExercises}
      />

      <GridLinesDemo selectedExercises={selectedExercises} />
    </>
  );
}

export default App;
