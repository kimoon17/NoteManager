import {makeStyles} from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: '6',
    width: '100%'
  },
  item: {
    maxHeight: '300px',
    width: '270px',
  },

}))

const Note = ({note, setNote}) => {
  const classes = useStyles()
  return (
    <Paper >
      <Card className={classes.item} style={{backgroundColor: note.color}}>
        <CardActionArea onClick={() => setNote(note.id)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {note.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {note.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  )
}


const NoteList = ({list, ...rest}) => {
  const classes = useStyles()
  return <section className={classes.root}>
    {list && list.map(note => <Note key={note.id} note={note} {...rest}/>)}
  </section>
}


export default NoteList