import { useState } from "react";

function Dropdown({ biceps, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBicepClick = (bicep) => {
    setIsOpen(false);
    onSelect(bicep);
  };

  const rederedBiceps = biceps.map((bicep) => {
    return (
      <div onClick={() => handleBicepClick(bicep)} key={bicep.value}>
        {bicep.label}
      </div>
    );
  });

  let content = "Biceps";
  let triceps = "Triceps";

  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{rederedBiceps}</div>}
    </div>
  );
}
export default Dropdown;
