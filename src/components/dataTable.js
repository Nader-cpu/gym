import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function GridLinesDemo({
	selectedExercises,
	setSelectedExercises,
}) {
	const actionTemplate = (rowData) => {
		const icon = "pi pi-trash";

		return (
			<Button
				type="button"
				style={{ fontSize: "2rem" }}
				icon={icon}
				className="p-button-sm p-button-text"
				onClick={() => handleDelete(rowData)}
			/>
		);
	};

	const handleDelete = (rowData) => {
		const filteredExercises = selectedExercises.filter(
			(exercise) => exercise.name !== rowData.name
		);
		setSelectedExercises(filteredExercises);
		console.log(rowData);
	};
	return (
		<div className="card">
			<DataTable
				value={selectedExercises}
				showGridlines
				tableStyle={{ margin: "auto", width: "75vw" }}>
				<Column field="name" header="Name"></Column>
				<Column field="muscleGroup" header="MuscleGroup"></Column>
				<Column field="sets" header="Sets"></Column>
				<Column style={{ flex: "0 0 4rem" }} body={actionTemplate}></Column>
			</DataTable>
		</div>
	);
}
