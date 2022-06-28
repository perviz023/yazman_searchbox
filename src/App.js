import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import {getUserListActions} from "./store/users/reducer/getUserList"
import TextField from '@mui/material/TextField';
import data from "./store/users/saga/userData.json"
import { Autocomplete } from "@mui/material";

const App = () => {
  const [type, setType] = React.useState("kassa");
  const dispatch = useDispatch();
  const {list, value} = useSelector((store) => store.users.getUserList);
  
  const handleChangeSelect = (event) =>{
    setType (event.target.value)
    dispatch(getUserListActions.start({ value: "", type: type }));
  } 
  

  const handleChangeInput = (event) => {
    dispatch(getUserListActions.start({ value: event.target.value, type: type  }));
  };
  const showElement = (id) => {
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Haradan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Age"
          onChange={handleChangeSelect}
        >
          <MenuItem value={"kassa"}>Kassa</MenuItem>
          <MenuItem value={"xerc"}>Xərc</MenuItem>
          <MenuItem value={"musteri"}>Müştəri</MenuItem>
          
          
        
          
        </Select>
        
      </FormControl>
      

      <TextField onChange={handleChangeInput} value={value} id="outlined-basic" label="Məlumatı daxil et" variant="outlined" />
      {list.map((item) => (
            <div  onClick={() => showElement(item.id)}>{item.name}</div>
          ))}
    </Box>
  );
      }

export default App;
