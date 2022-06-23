
import React,{useState} from 'react';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from  "@mui/material/Grid";

  
export default function EmployeeForm(props) {
    //location
    const place = [
        {
            city: 'Muzaffarpur',
            s:'Bihar'

          },
          {
            city: 'Kolkata',
            s:'West Bengal'

          },];
    //States
    const [city, setCity] = useState('');
    const [s, setS] = useState('West Bengal');
    const [name,setName]=useState('');
    const [mail,setMail]=useState('');
    const [address,setAddress]=useState('');
    const [location,setLocation]=useState('');


    //Event Handlers
    const handleCityChange = (event) => {
        event.preventDefault();
       setCity(event.target.value);
      };
    const handleStateChange = (event) => {
        event.preventDefault();
        setS(event.target.value);
      };
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
        setMail(event.target.value);
      };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
      };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
      };
    const handleSave = (event) => {
        event.preventDefault();
        console.log('Full Name : '+ name);
        console.log('Email : '+ mail);
        console.log('Address : '+ address);
        console.log('Location : '+ location);
        console.log('City : '+ city);
        console.log('State : '+ s);
        props.setOpen(false);
    }
  return (
    <Box sx={{justifyContent:'space-around',alignItems:'flex-start'}}>   
        <DialogTitle>Add New Employee</DialogTitle>
            <DialogContent>
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={3}>                
                <Grid item xs={6}>
                        <TextField
                            required
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Full Name"
                            type="text"
                            onChange={handleNameChange}
                            fullWidth
                            variant="outlined"/>
                    </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email id"
                        type="email"
                        onChange={handleEmailChange}
                        fullWidth
                        variant="outlined" />
                    </Grid>
                    
                <Grid item xs={6}>
                    <TextField
                        required
                        id="address"
                        label="Address"
                        multiline
                        maxRows={4}
                        placeholder="Address"
                        onChange={handleAddressChange}
                        variant="outlined"
                        style={{width:257}}
                        /> 
                </Grid>
                <Grid item xs={6}>
                <TextField
                        required
                        id="location"
                        label="Location"
                        multiline
                        maxRows={4}   
                        placeholder="Location"
                        onChange={handleLocationChange}
                        variant="outlined"
                        style={{width:257}}
                        /> 
               </Grid>
                <Grid item xs={6}>
                <TextField
                    required
                    id="outlined-select-city"
                    select
                    label="City"
                    style={{width:257}}
                    value={city}
                    onChange={handleCityChange}
                    helperText="select your city"
                    
                    >
                    {place.map((e) => (
                        <MenuItem key={e.city} value={e.city}>
                        {e.city}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                <TextField
                    required
                    id="outlined-select-state"
                    select
                    label="State"
                    style={{width:257}}
                    value={s}
                    onChange={handleStateChange}
                    helperText="select your state"
                    >
                    {place.map((option) => (
                        <MenuItem key={option.s} value={option.s}>
                        {option.s}
                        </MenuItem>
                    ))} 
                    </TextField>
                </Grid>
            </Grid>
            </Box>        
        
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
        
        </Box>
  )
}
