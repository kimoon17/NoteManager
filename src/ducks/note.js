import {createSelector} from 'reselect'

/**
 * Constants
 */

export const moduleName = 'note'
const prefix = moduleName

export const FETCH_NOTE_LIST = `${prefix}/FETCH_NOTE_LIST`
export const CREATE_NOTE = `${prefix}/CREATE_NOTE`
export const UPDATE_NOTE = `${prefix}/UPDATE_NOTE`
export const DELETE_NOTE = `${prefix}/DELETE_NOTE`
export const READ_NOTE = `${prefix}/READ_NOTE`

const mockNote = [{title: "rrr", color: "#7A1616", description: "rrrrrr", id: 1, alert : new Date()}]

export const ReducerRecord = {
  noteList: mockNote,
  activeNote: null,
}

export default function reducer(state = ReducerRecord, action) {
  const {type, payload} = action
  switch(type) {
    case FETCH_NOTE_LIST:
    case CREATE_NOTE:
    case UPDATE_NOTE:
    case DELETE_NOTE:
      return Object.assign({}, state, {
        noteList: payload
      })
    case READ_NOTE:
      return Object.assign({}, state, {
        activeNote: payload
      })
    default:
      return state
  }
}

/**
 * Selectors
 */


export const stateSelector = state => state[moduleName]
export const noteListSelector = createSelector(stateSelector, state => state.noteList)
export const activeNoteSelector = createSelector(stateSelector, state => state.activeNote)


/**
 * Action creators
 */

export const setActiveNote = (nodeId) => ({
  type: READ_NOTE,
  payload: nodeId
})

export const createNote = (newNode) => (dispatch, getState) => {
  const noteList = noteListSelector(getState()) || []

  dispatch({
    type: CREATE_NOTE,
    payload: [...noteList, {...newNode, id: noteList.length + 1}]
  })
}

export const fetchNoteList = () => ({
  type: FETCH_NOTE_LIST,
  payload: window.localStorage.getItem("noteList") && JSON.parse(window.localStorage.getItem("noteList"))
})

export const updateNote = (newNote) => ({
  type: UPDATE_NOTE,
  payload: newNote
})

export const deleteNote = (nodeId) => ({
  type: UPDATE_NOTE,
  payload: nodeId
})
