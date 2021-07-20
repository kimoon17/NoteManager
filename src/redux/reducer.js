import {combineReducers} from 'redux'

import noteReducer, {moduleName as noteModule} from '../ducks/note'

export default combineReducers({
  [noteModule]: noteReducer
})