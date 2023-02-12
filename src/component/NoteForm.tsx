import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

interface Props {
  title: string;
  inputNote: string;
  inputDesc: string;
  inputTitle: string;
  editedId: number | null;
  setInputDesc: (event: string) => void;
  setInputNote: (event: string) => void;
  setInputTitle: (event: string) => void;
  handleAddNote: (event: React.MouseEvent) => void;
}

export default function NoteForm({
  title,
  editedId,
  inputNote,
  inputDesc,
  inputTitle,
  setInputNote,
  setInputDesc,
  setInputTitle,
  handleAddNote,
}: Props) {
  return (
    <>
      <h1 className="app-header">{title}</h1>
      <form className="add-task">
        <FormInput
          label="Title:"
          inputTitle={inputTitle}
          setInput={setInputTitle}
        />
        <FormInput
          label="Description:"
          inputTitle={inputDesc}
          setInput={setInputDesc}
        />
        <FormInput
          label="Note:"
          inputTitle={inputNote}
          setInput={setInputNote}
        />
        <FormButton editedId={editedId} handleAddNote={handleAddNote} />
      </form>
    </>
  );
}
