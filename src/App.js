import React from 'react';
import './App.css'

import BookList from './components/BookList/BookList'
import Navbar from './components/Navbar/Navbar'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import ThemeContextProvider from './contexts/ThemeContext'


const App = () => {
  return ( 
    <ThemeContextProvider>
      <div className="App">
        <Navbar />
        <BookList />
        <ThemeToggle />
      </div>
    </ThemeContextProvider>
  );
}

export default App;