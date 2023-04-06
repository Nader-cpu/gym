import { useState } from "react";
import DropDown from "./components/dropdown";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (bicep) => {
    setSelection(bicep);
  };

  const biceps = [
    { label: "Biceps Curls", value: "BC" },
    { label: "Incline Dumbbell Curls", value: "IDC" },
    { label: "Reverse Barbell Curls", value: "RBC" },
    { label: "Standing Hammer Curl", value: "SHC" },
  ];
  return (
    <DropDown biceps={biceps} selection={selection} onSelect={handleSelect} />
  );
}

export default App;
