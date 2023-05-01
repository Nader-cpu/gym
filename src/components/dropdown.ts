import React from "react";
import { Dropdown } from "primereact/dropdown";
import "../styles/dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../store/store";

interface GenericDropdown {
  selectedExercises: string;
  handleSelectChange: string;
  state: string;
}

export default function GenericDropdown({ placeHolder, exercises }) {
  const dispatch = useDispatch();
  const selectedExercises = useSelector((state) => state.exerciseReducer.data);
  const handleSelectChange = (value) => {
    dispatch(addExercise(value));
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
