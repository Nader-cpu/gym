import GenericDropdown from "./components/dropdown";
import GenericTable from "./components/dataTable";
import { useState } from "react";
import { GenericInstructions } from "./components/instructions";

function App() {
	const [selectedExercises, setSelectedExercises] = useState([]);
	const biceps = [
		{
			name: "Reverse Curl",

			muscleGroup: "Biceps",
			sets: "12-10-8",
		},
		{
			name: "Wide-Grip Curl",

			muscleGroup: "Biceps",
			sets: "10-10-10-10",
		},
		{
			name: "Conventional Barbell Curl",

			muscleGroup: "Biceps",
			sets: "12-10-8",
		},
		{
			name: "Dumbbell Curl",

			muscleGroup: "Biceps",
			sets: "12-10-8",
		},
	];

	const triceps = [
		{
			name: "Triceps Kickbacks",

			muscleGroup: "Triceps",
			sets: "12-10-8",
		},
		{
			name: "Triceps Dips",

			muscleGroup: "Triceps",
			sets: "10-10-10-10",
		},
		{
			name: "Rope Pushdowns",

			muscleGroup: "Triceps",
			sets: "12-10-8",
		},
		{
			name: "Decline Triceps Extension",

			muscleGroup: "Triceps",
			sets: "12-10-8",
		},
	];

	const back = [
		{
			name: "Bent Over Row ",

			muscleGroup: "Back",
			sets: "12-10-8",
		},
		{
			name: "Pull-up",

			muscleGroup: "Back",
			sets: "12-10-8",
		},
		{
			name: "Deadlift ",

			muscleGroup: "Back",
			sets: "12-10-8",
		},
		{
			name: "Pull-over ",

			muscleGroup: "Back",
			sets: "12-10-8",
		},
	];

	const chest = [
		{
			name: "Flat Bench Press",

			muscleGroup: "Chest",
			sets: "12-10-8",
		},
		{
			name: "Incline Bench Press ",

			muscleGroup: "Chest",
			sets: "12-10-8",
		},
		{
			name: "Decline Bench Press ",

			muscleGroup: "Chest",
			sets: "12-10-8",
		},
		{
			name: "Chest Dip ",
			muscleGroup: "Chest",
			sets: "12-10-8",
		},
	];

	const legs = [
		{
			name: "Back Squat",

			muscleGroup: "Legs",
			sets: "12-10-8",
		},
		{
			name: "Front Squat",
			muscleGroup: "Legs",
			sets: "12-10-8",
		},
		{
			name: "Romanian Deadlift",
			muscleGroup: "Legs",
			sets: "12-10-8",
		},
		{
			name: "Walking Lunges",
			muscleGroup: "Legs",
			sets: "12-10-8",
		},
	];

	const shoulders = [
		{
			name: "Overhead Press",
			muscleGroup: "Shoulders",
			sets: "12-10-8",
		},
		{
			name: "Dumbbell Shoulder Press",

			muscleGroup: "Shoulders",
			sets: "12-10-8",
		},
		{
			name: "Arnold Press",

			muscleGroup: "Shoulders",
			sets: "12-10-8",
		},
		{
			name: "Push Press",
			muscleGroup: "Shoulders",
			sets: "12-10-8",
		},
	];

	const abs = [
		{
			name: "Plank poses",
			muscleGroup: "Abs",
			sets: "12-10-8",
		},
		{
			name: "Bicycle crunches.",
			muscleGroup: "Abs",
			sets: "12-10-8",
		},
		{
			name: "Get in the ring",
			muscleGroup: "Abs",
			sets: "12-10-8",
		},
		{
			name: "Pilates",
			muscleGroup: "Abs",
			sets: "12-10-8",
		},
	];

	const traps = [
		{
			name: "Face Pull",
			muscleGroup: "Traps",
			sets: "12-10-8",
		},
		{
			name: "Incline Dumbbel Row",
			muscleGroup: "Traps",
			sets: "12-10-8",
		},
		{
			name: "Pullup Shrug",
			muscleGroup: "Traps",
			sets: "12-10-8",
		},
		{
			name: "Barbel Shrug",
			muscleGroup: "Traps",
			sets: "12-10-8",
		},
	];

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}>
				<h2>Create Program</h2>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100vw",
					overflow: "wrap",
				}}>
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
				<GenericDropdown
					placeHolder={"Abs"}
					exercises={abs}
					selectedExercises={selectedExercises}
					change={setSelectedExercises}
				/>
				<GenericDropdown
					placeHolder={"Traps"}
					exercises={traps}
					selectedExercises={selectedExercises}
					change={setSelectedExercises}
				/>
			</div>
			<br />
			<GenericInstructions />

			<GenericTable
				selectedExercises={selectedExercises}
				setSelectedExercises={setSelectedExercises}
			/>
		</>
	);
}

export default App;
