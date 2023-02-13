import React from "react";
import NoNote from "./NoNote";

interface Props {
  title: string;
  notesLength: number;
  children: React.ReactNode;
}

export default function NoteLayout({ title, notesLength, children }: Props) {
  return (
    <>
      <h3 className="subtitle">{title}</h3>
      <div className="task-list-container">
        <NoNote notesLength={notesLength} />
        <div className="task-list-scroll">{children}</div>
      </div>
    </>
  );
}
