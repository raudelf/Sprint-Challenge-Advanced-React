import React, { useState } from 'react';
import './App.css';
import Players from './components/Players';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleTheme = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
    <div data-testid='changeTheme' className={darkMode ? 'themeBtn lightBtn' : 'themeBtn'} onClick={toggleTheme}>Toggle Theme</div>
      <header data-testid='pageTitle' className='header'>
        <h1>Women's World Cup</h1>
        <h2>Most Searched Athletes</h2>
      </header>
      <Players />
    </div>
  );
}

export default App;
