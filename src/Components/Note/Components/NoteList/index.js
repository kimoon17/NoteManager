import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: '6',
    width: '100%'
  },
  item: {
    height: '300px',
    width: '170px',
    border: '1px solid #888'
  },
  title: {

  },
  description: {

  }

}))


const NoteList = ({list, setNote}) => {
  const classes = useStyles()
  return <section className={classes.root}>
    {list && list.map(note => {
      return <div className={classes.item} key={note.id} onClick={() => setNote(note.id)}>
        <h3>{note.title}</h3>
        <span>{note.description}</span>
      </div>
    })}
  </section>
}


export default NoteList