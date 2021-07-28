import {connect} from "react-redux"

import {
  noteListSelector,
  activeNoteSelector,
  setActiveNote,
  createNote,
  fetchNoteList,
  updateNote,
  deleteNote
} from '../../ducks/note'

import ActiveForm from "./Components/ActiveNote"
import NoteForm from "./Components/NoteForm"
import NoteList from "./Components/NoteList"

const Note = (props) => {
  const {noteList, activeNote} = props
  const {setActiveNote, createNote, fetchNoteList, updateNote, deleteNote} = props

  return (
    <>
      <NoteForm handleCreateNote={createNote} />
      <NoteList list={noteList} setNote={setActiveNote}/>
      <ActiveForm/>
    </>
  )
}

export default connect((state) => ({
  noteList: noteListSelector(state),
  activeNote: activeNoteSelector(state),
}), {
  setActiveNote,
  createNote,
  fetchNoteList,
  updateNote,
  deleteNote
})(Note)