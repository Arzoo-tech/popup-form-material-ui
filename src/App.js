import './App.css';
import React,{useState} from 'react';
import SideMenu from './components/SideMenu';
import { Routes, Route, Link } from "react-router-dom";
import EmployeePage from './components/EmployeePage';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {

   // States
    const [pageTitle,setPageTitle]=useState('Home');
    
   return(    
     <div className="App">
       <Routes>
          <Route path="/" element={<Home pageTitle={pageTitle} setPageTitle={setPageTitle}/>} />
          <Route path="/employeepage" element={<EmployeePage pageTitle={pageTitle} setPageTitle={setPageTitle} />} />
        </Routes>
      </div>
    )
  
}

function Home(props){
  console.log('homePage') 
 return (
  <div className='homePage'>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
     <SideMenu pageTitle={props.pageTitle} setPageTitle={props.setPageTitle}/>

     <Box
          component="main"
          style={{ margin: 20,marginLeft: 400,height: 200,padding: 10 }}       
        >
        <Toolbar />
        <Typography variant="pargraph" component="h2">
          Here's the home page
          </Typography>;
      </Box>
    </Box></div>
    )
}

export default App;
