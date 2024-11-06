import React from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../component/Navbar.jsx';
const RootLayout = () => {
  return (
   <>
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid item xs={2}>
          <div className='gride'><Navbar/></div>
        </Grid>
        <Grid item xs={10}>
            <Outlet/>
        </Grid>
      </Grid>
    </Box>
    </>

  )
}

export default RootLayout