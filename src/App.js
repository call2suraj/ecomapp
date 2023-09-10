import React, { useState } from 'react';
import './App.css';
import data from './data/data';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Items from './components/Items';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from "@mui/material/TextField";

function App() {
  const [id, setId] = React.useState('all');
  const [inputText, setInputText] = useState("");
  const [list, setList] = React.useState(data);
  const [filterList, setFilterList] = React.useState(list[id]?.details?.items);

  const handleChange = (event) => {
    setId(event.target.value);
    setFilterList(list[event.target.value]?.details?.items);
  };

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);


    const filteredData = list[id]?.details?.items?.filter((el) => {
      //if no input the return the original
      if (inputText === '') {
        return el;
      }
      //return the item which contains the user input
      else {
        return el.name?.toLowerCase().includes(lowerCase)
      }
    })

    setFilterList(filteredData);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 400, margin: 20 }}>
        <InputLabel id="demo-simple-select-label">Select the Product</InputLabel>
        <Select labelId="demo-simple-select-label" style={{ width: 200 }} onChange={handleChange} defaultValue={'all'}>
          {Object.keys(list)?.map((choice) => (
            <MenuItem key={choice} value={choice}>
              {choice}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div style={{ margin: 20, paddingLeft: 20, textAlign: 'center', }}>
        <div style={{ width: '30%' }}>
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <div style={{ width: 606, height: 420, textAlign: 'center', marginTop: 10, display: 'flex'}}>
          {
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 6 }} >
              {
                filterList?.map((dt) => (
                  <Grid xs={2} sm={4} md={3} key={dt.name} spacing={5}>
                    <Items img={dt.img} name={dt.name} desc={dt.description} data={list[id]?.details?.items} inputText={inputText} />
                  </Grid>
                ))
              }
            </Grid>
          }
        </div>
      </div>

    </div>
  );
}

export default App;
