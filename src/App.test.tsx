import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import App from "./App";
import { NoteItem } from "./component";
import { Notes } from "./data/data";

afterEach(cleanup);

describe("Note component", () => {
  const handleDeleteClick = jest.fn();
  const handleNoteClick = jest.fn();
  const handleEditClick = jest.fn();

  it("Note renders without crashing", () => {
    render(<App />);
  });

  it("Handle Note Item Click: can mark a note as completed", () => {
    render(
      <NoteItem
        key={0}
        note={Notes[0]}
        index={0}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
        handleNoteClick={handleNoteClick}
      />
    );
    const checkbox = screen.getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("Handle Note Item Delete: can delete a note-item", () => {
    render(
      <NoteItem
        key={0}
        note={Notes[0]}
        index={0}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
        handleNoteClick={handleNoteClick}
      />
    );
    const deleteBtn = screen.getByTitle("Delete Task");
    fireEvent.click(deleteBtn);
    expect(handleDeleteClick).toBeCalled();
  });

  it("Handle Note Item Edit: can edit a note-item", () => {
    render(
      <NoteItem
        key={0}
        note={Notes[0]}
        index={0}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
        handleNoteClick={handleNoteClick}
      />
    );
    const editBtn = screen.getByTitle("Edit Task");
    fireEvent.click(editBtn);
    expect(handleEditClick).toBeCalled();
  });
});
