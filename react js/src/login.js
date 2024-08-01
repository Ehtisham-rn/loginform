import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./login.css";


const defaultTheme = createTheme();


const Login = () => {

    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
  
  
  
    const handleSubmit=async(event)=>{
      event.preventDefault();
      if (!name || !email || !password) {
        alert("All fields are required!");
        return; 
      }
    
    
      const apiUrl = process.env.REACT_APP_NODE_URL;
      let result = await fetch(`${apiUrl}/register`,{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{'Content-type':'application/json'}
      })
      result = await result.json();
      console.log(result);
      if(result){
        alert("login successfully")
      }
      else{
        alert("Error Occured")
      }
  
      
  
    }
  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid
      container
      component="main"
      className="main_container_login"
      lg={12}
      xl={12}
      xs={12}
      sm={12}
      md={12}
    >
  
      <Grid
        item
        lg={12}
        xl={12}
        xs={12}
        sm={12}
        md={12}
        component={Paper}
        elevation={6}
        square
        className="Login_Textfield_grid"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box className="Login_Textfiled_Box">
          <Grid item lg={11} xl={11} xs={10} sm={10} md={11}>
           
        
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              className="Login_Form_Textfield"
            >
            
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name} onChange={(e)=>setName(e.target.value)}
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                
               
                value={email} onChange={(e)=>setEmail(e.target.value)}
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                
               
                value={password} onChange={(e)=>setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="Login_button"
                style={{ boxShadow: "none" }}
              
              >
                SUBMIT
              </Button>
           
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  )
}

export default Login