import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import './App.css';

const theme = {};

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <header></header>

    <body>

      <h1>Well hello there!</h1>
    </body>

    <footer></footer>

    </ThemeProvider>
    <CssBaseline />
    </>
  );
}

export default App;
