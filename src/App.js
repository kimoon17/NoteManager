import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import './App.css';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="#ffe5e5" color="#000" p={2}>
            Work
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="#f8e5ff" color="#000" p={2}>
            Personal
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="#f1ffe5" color="#000" p={2}>
            Chores
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
