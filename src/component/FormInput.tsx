import React from "react";

interface Props {
  label: string;
  inputTitle: string;
  setInput: (event: string) => void;
}

export default function FormInput({ label, inputTitle, setInput }: Props) {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className="task-input"
        value={inputTitle}
        onChange={(e): void => setInput(e.target.value)}
      />
    </>
  );
}
