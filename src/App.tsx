import React, { useState, useEffect, useCallback } from "react";
import { NoteForm, NoteItem, NoteLayout } from "./component";
import { Notes } from "./data/data";
import { Note } from "./interfaces";
import "./App.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputNote, setInputNote] = useState<string>("");
  const [inputDesc, setInputDesc] = useState<string>("");
  const [inputTitle, setInputTitle] = useState<string>("");
  const [editedId, setEditedId] = useState<number | null>(null);

  const localDataStore: Array<Note> = JSON.parse(
    localStorage.getItem("data_store") as string
  );

  const createNewNote = useCallback((): void => {
    setNotes([
      ...notes,
      {
        id: notes[notes.length - 1].id + 1,
        title: inputTitle,
        note: inputNote,
        description: inputDesc,
        date: new Date()
          .toLocaleDateString()
          .replaceAll("/", "-")
          .split("-")
          .reverse()
          .join("-"),
        completed: false,
      },
    ]);
  }, [inputDesc, inputNote, inputTitle, notes]);

  const editSingleNote = useCallback(
    (editedId: number): void => {
      const newNotes = [...notes];
      for (let i = 0; i < newNotes.length; i++) {
        if (newNotes[i].id === editedId) {
          newNotes[i].description = inputDesc;
          newNotes[i].note = inputNote;
          newNotes[i].title = inputTitle;
        }
      }
      setNotes([...newNotes]);
      setEditedId(null);
    },
    [inputDesc, inputNote, inputTitle, notes]
  );

  const updateDataStore = useCallback((): void => {
    let newNotes = [...notes];
    localStorage.setItem("data_store", JSON.stringify(newNotes));
  }, [notes]);

  const handleAddNote = useCallback((): void => {
    if (editedId) {
      editSingleNote(editedId);
    } else {
      createNewNote();
    }
    resetNoteForm();
  }, [createNewNote, editSingleNote, editedId]);

  const handleNoteClick = useCallback(
    (index: number): void => {
      const newNotes = [...notes];
      newNotes[index].completed = !newNotes[index].completed;
      setNotes(newNotes);
    },
    [notes]
  );

  const handleEditClick = useCallback((note: Note): void => {
    setInputDesc(note["description"]);
    setEditedId(note["id"]);
    setInputTitle(note["title"]);
    setInputNote(note["note"]);
  }, []);

  const handleDeleteClick = useCallback(
    (note: Note): void => {
      let newNotes = [...notes];
      newNotes = newNotes.filter((elem) => elem.id !== note.id);
      setNotes(newNotes);
      resetNoteForm();
    },
    [notes]
  );

  const resetNoteForm = (): void => {
    setInputDesc("");
    setInputTitle("");
    setInputNote("");
  };

  useEffect(() => {
    if (localDataStore?.length && !notes.length) {
      setNotes(localDataStore);
    } else if (!notes.length) {
      setNotes(Notes);
    }
    updateDataStore();
  }, [localDataStore, notes, updateDataStore]);

  return (
    <div className="app-container">
      <NoteForm
        title="Ik's Note App"
        inputTitle={inputTitle}
        editedId={editedId}
        inputNote={inputNote}
        inputDesc={inputDesc}
        setInputNote={setInputNote}
        setInputTitle={setInputTitle}
        setInputDesc={setInputDesc}
        handleAddNote={handleAddNote}
      />
      <NoteLayout title={"Notes"}>
        <ul className="task-list">
          {notes
            .sort(function (a, b) {
              return b.id - a.id;
            })
            .map((note, index) => (
              <NoteItem
                index={index}
                key={index}
                note={note}
                handleNoteClick={handleNoteClick}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            ))}
        </ul>
      </NoteLayout>
    </div>
  );
};

export default App;
