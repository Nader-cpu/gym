import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function GridLinesDemo() {
	const [products, setProducts] = useState([
		{ name: "pullups", MuscleGroup: "back" },
	]);

	useEffect(() => {}, []);

	return (
		<div className="card">
			<DataTable
				value={products}
				showGridlines
				tableStyle={{ margin: "auto", width: "75vw" }}>
				<Column field="name" header="Name"></Column>
				<Column field="muscleGroup" header="MuscleGroup"></Column>
				<Column field="sets" header="Sets"></Column>
				<Column field="action" header="Action"></Column>
			</DataTable>
		</div>
	);
}
