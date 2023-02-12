import React from "react";

interface Props {
  editedId: number | null;
  handleAddNote: (event: React.MouseEvent) => void;
}

export default function FormButton({ editedId, handleAddNote }: Props) {
  return (
    <div className="button" data-testid="Submit Btn" onClick={handleAddNote}>
      {!editedId ? "Add Note" : "Edit Note"}
    </div>
  );
}
