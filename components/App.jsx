import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    dkeeper.createNote(note.title, note.content);
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(receivedKey) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== receivedKey;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClicked={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            del={deleteNote}
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
