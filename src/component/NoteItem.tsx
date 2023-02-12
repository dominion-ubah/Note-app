import React from "react";
import { Note } from "../interfaces";

interface Props {
  note: Note;
  key: number;
  index: number;
  handleEditClick: (note: Note) => void;
  handleDeleteClick: (note: Note) => void;
  handleNoteClick: (index: number) => void;
}

export default function NoteItem({
  note,
  index,
  handleEditClick,
  handleNoteClick,
  handleDeleteClick,
}: Props) {
  return (
    <li key={index} className="task-list-item">
      <label
        onClick={() => handleNoteClick(index)}
        className="task-list-item-label"
      >
        <span>
          <input
            type="checkbox"
            className="check-box"
            data-testid="checkbox"
            defaultChecked={note.completed ? true : false}
          />
        </span>
        <span
          className="note-details"
          onClick={() => handleNoteClick(index)}
          style={{
            textDecoration: note.completed ? "line-through" : "none",
          }}
        >
          <h4>{note.title}</h4>
          <p>{note.description}</p>
          <p>{note.note}</p>
        </span>
      </label>
      <span className="action-btns">
        <span
          title="Edit Task"
          className="edit-btn"
          onClick={() => handleEditClick(note)}
        ></span>
        <span
          title="Delete Task"
          className="delete-btn"
          onClick={() => handleDeleteClick(note)}
        ></span>
      </span>
    </li>
  );
}
