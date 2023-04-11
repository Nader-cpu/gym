import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function GenericTable({
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
			(ex) => ex.name !== rowData.name
		);
		setSelectedExercises(filteredExercises);
	};

	const cols = [
		{ field: "name", header: "Name" },
		{ field: "muscleGroup", header: "MuscleGroup" },
		{ field: "sets", header: "Sets" },
	];

	const exportColumns = cols.map((col) => ({
		title: col.header,
		dataKey: col.field,
	}));

	const exportPdf = () => {
		import("jspdf").then((jsPDF) => {
			import("jspdf-autotable").then(() => {
				const doc = new jsPDF.default(0, 0);

				doc.autoTable(exportColumns, selectedExercises);
				doc.save("exercises.pdf");
			});
		});
	};

	const header = (
		<div className="flex align-items-center justify-content-end gap-2">
			<Button
				type="button"
				icon="pi pi-file-pdf"
				severity="danger"
				onClick={exportPdf}
				data-pr-tooltip="PDF"
			/>
		</div>
	);

	return (
		<div className="card">
			<DataTable
				value={selectedExercises}
				showGridlines
				tableStyle={{ margin: "auto", width: "75vw", marginTop: "25px" }}>
				<Column field="name" header="Name"></Column>
				<Column field="muscleGroup" header="MuscleGroup"></Column>
				<Column field="sets" header="Sets"></Column>
				<Column
					header={header}
					style={{ flex: "0 0 4rem" }}
					body={actionTemplate}></Column>
			</DataTable>
		</div>
	);
}

// optionDisabled={(option) =>
//     selectedExercises.find((e) => e.name === option.name)
// }
