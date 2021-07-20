import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import React, {useEffect, useRef} from "react"
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
    width: '50%',
    justifyContent: 'space-between',
  },
  button: {
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  }
}))

const NoteForm = () => {
  const classes = useStyles()
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <input ref={inputEl} className={classes.input} type="text" placeholder="Title" />
      </div>

      <div className={classes.middle} >
        <textarea className={classes.textarea} type="text" placeholder="Take a note..."/>
      </div>

      <div className={classes.bottom}>
        <div className={classes.icons}>
          <AddAlertOutlinedIcon/>
          <PersonAddOutlinedIcon/>
          <ColorLensOutlinedIcon/>
          <ImageOutlinedIcon/>
          <ArchiveOutlinedIcon/>
          <MoreVertOutlinedIcon/>
        </div>
        <button className={classes.button}>Close</button>
      </div>
    </div>
  )
}

export default NoteForm