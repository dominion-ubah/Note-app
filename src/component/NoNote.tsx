import React from "react";

interface Props {
  notesLength: number;
}

export default function NoNote({ notesLength }: Props) {
  return (
    <>
      {!notesLength && (
        <div className="no-note">
          <center>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/7486/7486747.png"}
              width={80}
              height={80}
              alt="empty state"
            />
            <div>No Notes Available</div>
          </center>
        </div>
      )}
    </>
  );
}
