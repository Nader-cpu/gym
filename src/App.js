import GenericDropdown from "./components/dropdown";
import GenericTable from "./components/dataTable";
import { useState } from "react";
import data from "./components/data";
import { GenericInstructions } from "./components/instructions";

function App() {
	const [selectedExercises, setSelectedExercises] = useState([]);

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
					exercises={data.biceps}
					selectedExercises={selectedExercises}
					change={setSelectedExercises}
				/>
				<GenericDropdown
					placeHolder={"Triceps"}
					exercises={data.triceps}
					selectedExercises={selectedExercises}
					change={setSelectedExercises}
				/>
				<GenericDropdown
					placeHolder={"Back"}
					exercises={data.back}
					selectedExercises={selectedExercises}
					change={setSelectedExercises}
				/>
				<GenericDropdown
					placeHolder={"Chest"}
					exercises={data.chest}
					selectedExercises={selectedExercises}
					change={setSelectedExercises}
				/>
				<GenericDropdown
					placeHolder={"Legs"}
					exercises={data.legs}
					selectedExercises={selectedExercises}
					change={setSelectedExercises}
				/>
				<GenericDropdown
					placeHolder={"Shoulders"}
					exercises={data.shoulders}
					selectedExercises={selectedExercises}
					change={setSelectedExercises}
				/>
				<GenericDropdown
					placeHolder={"Abs"}
					exercises={data.abs}
					selectedExercises={selectedExercises}
					change={setSelectedExercises}
				/>
				<GenericDropdown
					placeHolder={"Traps"}
					exercises={data.traps}
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
