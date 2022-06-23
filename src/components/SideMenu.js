import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useNavigate } from "react-router-dom";
const drawerWidth = 200;

export default function SideMenu(props) 
{
  const navigateHome = useNavigate();
  const navigateToHome = () => {
    navigateHome('/');
  };
  const navigateEmployee = useNavigate();

  const navigateToEmployee = (event) => {
    event.preventDefault();
    navigateEmployee('/employeepage');
  };
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,bgcolor: "text.primary" }}>
        <Toolbar>
        <Button style={{ cursor: 'pointer' }} variant="text" onClick={navigateToHome} >{props.pageTitle}</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          backgroundColor: "pink",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Employee'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={navigateToEmployee} >
                  <ListItemIcon>
                    <PeopleAltIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
      </Box>
      </Drawer>
      
    </Box>
  );
}