import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function GenericDropdown({
  placeHolder,
  exercises,
  selectedExercises,
  change,
}) {
  const [selectedExercise, setSelectedExercise] = useState([]);

  const selectedExerciseTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <img
            alt={option.name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${option.code.toLowerCase()}`}
            style={{ width: "18px" }}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  const handleSelectChange = (value) => {
    console.log(value);
    setSelectedExercise([...selectedExercises, value]);
    change([...selectedExercises, value]);
    console.log(selectedExercise.length);
  };

  return (
    <>
      <div
        className="card flex justify-content-center align-items-center gap-4"
        style={{ marginLeft: "20vw" }}
      >
        <Dropdown
          value={exercises}
          onChange={(e) => handleSelectChange(e.value)}
          options={exercises}
          optionLabel="name"
          placeholder={placeHolder}
          filter
          valueTemplate={selectedExerciseTemplate}
          itemTemplate={countryOptionTemplate}
          className="w-full md:w-14rem"
        />
      </div>
    </>
  );
}
