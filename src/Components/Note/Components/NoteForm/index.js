import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined'
import { ColorPicker } from 'material-ui-color';
import React, {useEffect, useRef, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  root: {
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 3px 5px rgba(0,0,0,0.50)',
    margin: '100px 300px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '350px',
    width: '600px',
    maxWidth: '600px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    fontSize: '28px',
    color: '#3b3b3b',
  },
  input : {
    border: 'none',
    fontSize: '20px !important',
    outline: 'none'
  },
  middle: {
    marginBottom: '20px'
  },
  textarea: {
    border: 'none',
    fontSize: '15px',
    width:'100%',
    outline: 'none'
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '15px',
    color: '#3b3b3b'
  },
  icons: {
    display: 'flex',
    width: '15%',
    justifyContent: 'space-between',
  },
  icon: {
    flex: '0 0 auto',
    color: 'rgba(0, 0, 0, 0.54)',
    overflow: 'visible',
    fontSize: '1.5rem',
    textAlign: 'center',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '10%',
    border: '1px solid rgba(0,0,0, 0.2)'
  },
  button: {
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  }
}))

const NoteForm = ({createNote}) => {
  const classes = useStyles()
  const inputEl = useRef(null)
  const [form, setForm] = useState({title: '', description: '', time: Date(), color: '#fff', alert: null})

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <input
          ref={inputEl}
          className={classes.input}
          type="text"
          placeholder="Title"
          defaultValue={form.title}
          onChange={(e) => {
            setForm(prevForm => ({...prevForm, title: e.target.value}))
          }}
        />
      </div>

      <div className={classes.middle} >
        <textarea
          className={classes.textarea}
          type="text"
          placeholder="Take a note..."
          defaultValue={form.description}
          onChange={(e) => {
            setForm(prevForm => ({...prevForm, description: e.target.value}))
          }}
        />
      </div>

      <div className={classes.bottom}>
        <div className={classes.icons}>
          <AddAlertOutlinedIcon/>
          <PersonAddOutlinedIcon/>
          <span className={classes.icon}>
            <ColorPicker
              defaultValue={form.color}
              value={form.color}
              onChange={(e) => {
                setForm(prevForm => ({...prevForm, color: e.css.backgroundColor}))
                return e.css.backgroundColor
              }}
            />
          </span>
          {/*<ColorLensOutlinedIcon/>*/}
          {/*<ImageOutlinedIcon/>*/}
          {/*<ArchiveOutlinedIcon/>*/}
          {/*<MoreVertOutlinedIcon/>*/}
        </div>
        <button className={classes.button}>Close</button>
      </div>
    </div>
  )
}

export default NoteForm