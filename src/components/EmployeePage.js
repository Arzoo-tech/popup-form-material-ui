import React from 'react';
import { styled } from '@mui/material/styles';
import SideMenu from './SideMenu'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Toolbar} from '@mui/material';
import { grey } from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import EmployeeForm from './EmployeeForm';



const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[700],
    },
  }));
export default function EmployeePage(props) {
  console.log('EmployeePage')
//states
  const [open, setOpen] = React.useState(false);

//Click Open
  const handleClickOpen = () => {
    setOpen(true);
  };
//Closing pop-up
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='employeePage'>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
     <SideMenu pageTitle={props.pageTitle} setPageTitle={props.setPageTitle}/>

     <Box
          component="main"
          style={{ margin: 20,marginLeft: 400,height: 200,width: 200,padding: 10 }}       
        >
        <Toolbar />
            <CustomButton 
            sx={{ textAlign: 'center',fontWeight: 550 }}
            style={{cursor: 'pointer' }} 
            variant="contained"
            onClick={handleClickOpen}>Add Employee</CustomButton>
      </Box>
      <Dialog open={open} onClose={handleClose} fullWidth  minWidth='20vh' minHeight='20vh' >

            <EmployeeForm open={open} setOpen={setOpen} handleClose={handleClose} handleClickOpen={handleClickOpen}/>
            
      </Dialog>
    </Box>
     </div>
  )
}
