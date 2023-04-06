import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

<DataTable value={products} stripedRows tableStyle={{ minWidth: "50rem" }}>
	<Column field="code" header="Code"></Column>
	<Column field="name" header="Name"></Column>
	<Column field="category" header="Category"></Column>
	<Column field="quantity" header="Quantity"></Column>
</DataTable>;

export default DataTable;