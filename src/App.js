import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';

function App() {
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form])
    setForm({})   
  }
  const removeData = (index) => {
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }
  useEffect(() =>{
    window.alert("useEffect call")
  }, [data])

  return (
    <div className="App">
      <Header />
      <div className='form'>
          <Stack direction="row" spacing={2}>
              <TextField
                  value={form.name}
                  onChange = {(e) => setForm({...form,name: e.target.value})}
                  id="outlined-basic" 
                  label="Name" 
                  variant="outlined" 
                />
              <TextField 
                  value={form.email} 
                  onChange = {(e) => setForm({...form,email: e.target.value})}
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
        <div className='list'>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} className='list'>
              <p>{element.name}</p>
              <p>{element.email}</p>
              <Button onClick={() => removeData(index)} color="error">
                  <DeleteIcon/>
              </Button>
       
    </div> 
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
