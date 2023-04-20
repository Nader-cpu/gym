import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { removeExercise } from "../store/store";

function GenericTable(props) {
  const dispatch = useDispatch();
  const selectedExercises = useSelector((state) => state.exerciseReducer.data);

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
    console.log("Exercise to delete ", rowData);
    dispatch(removeExercise(rowData));
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
        tableStyle={{
          margin: "auto",
          width: "75vw",
          marginTop: "50px",
        }}
      >
        <Column field="name" header="Name"></Column>
        <Column field="muscleGroup" header="MuscleGroup"></Column>
        <Column field="sets" header="Sets"></Column>
        <Column
          header={header}
          style={{ flex: "0 0 4rem" }}
          body={actionTemplate}
        ></Column>
      </DataTable>
    </div>
  );
}

export default GenericTable;

// optionDisabled={(option) =>
//     selectedExercises.find((e) => e.name === option.name)
// }
