import React from "react";
import { Dropdown } from "primereact/dropdown";
import "../styles/dropdown.css";

export default function GenericDropdown({
  placeHolder,
  exercises,
  selectedExercises,
  change,
}) {
  const handleSelectChange = (value) => {
    console.log(value);
    change([...selectedExercises, value]);
  };

  return (
    <>
      <div
        className="card flex justify-content-center align-items-center gap-4"
        style={{
          marginLeft: "20vw",
          margin: "15px 15px",
          display: "inline-Block",
        }}
      >
        <Dropdown
          value={exercises}
          onChange={(e) => handleSelectChange(e.value)}
          options={exercises}
          optionLabel="name"
          placeholder={placeHolder}
          filter
          optionDisabled={(option) =>
            selectedExercises.find((e) => e.name === option.name)
          }
          className="w-full m-4"
          style={{ width: "150px" }}
        />
      </div>
    </>
  );
}
