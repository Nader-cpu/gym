import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function GridLinesDemo() {
	const [products, setProducts] = useState([
		{ code: "dddssa", name: "Walid", category: "kifah", quantity: "brahim" },
	]);

	useEffect(() => {}, []);

	return (
		<div className="card">
			<DataTable
				value={products}
				showGridlines
				tableStyle={{ margin: "auto", width: "75vw" }}>
				<Column field="code" header="Code"></Column>
				<Column field="name" header="Name"></Column>
				<Column field="category" header="Category"></Column>
				<Column field="quantity" header="Quantity"></Column>
			</DataTable>
		</div>
	);
}
