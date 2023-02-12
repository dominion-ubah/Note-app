import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function NoteLayout({ title, children }: Props) {
  return (
    <>
      <h3 className="subtitle">{title}</h3>
      <div className="task-list-container">
        <div className="task-list-scroll">{children}</div>
      </div>
    </>
  );
}
