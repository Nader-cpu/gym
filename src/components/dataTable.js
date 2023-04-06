import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function GridLinesDemo({ selectedExercises }) {
  return (
    <div className="card">
      <DataTable
        value={selectedExercises}
        showGridlines
        tableStyle={{ margin: "auto", width: "75vw" }}
      >
        <Column field="name" header="Name"></Column>
        <Column field="muscleGroup" header="MuscleGroup"></Column>
        <Column field="sets" header="Sets"></Column>
        <Column field="action" header="Action"></Column>
      </DataTable>
    </div>
  );
}
