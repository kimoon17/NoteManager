import './App.css';
import NoteForm from './Components/NoteForm'
import Header from './Components/Header'
import Note from './Components/Note'
import React from "react"

function App() {
  return (
    <div className="App">
      <Header />
      <NoteForm />
    </div>
  );
}

export default App;
