import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import List from './Components/List';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, {name, email}])
    setName("")
    setEmail("")
  }

  return (
    <div className="App">
      <Header />
      <div className='form'>
          <Stack direction="row" spacing={2}>
              <TextField
                  value={name}
                  onChange = {(e) => setName(e.target.value)}
                  id="outlined-basic" 
                  label="Name" 
                  variant="outlined" 
                />
              <TextField 
                  value={email} 
                  onChange ={(e) => setEmail(e.target.value)}
                  id="outlined-basic" 
                  label="Email" 
                  variant="outlined" 
                />
              <Button onClick={addData} variant="contained" color="success">
                <AddIcon/>
              </Button>
          </Stack>
      </div>

      <div className='data'>
          <List/>

      </div>
    </div>
  );
}

export default App;
