
import React from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar'

function App() {
  return (

    <>
      <NavBar />
      <main className="container">
        <Counters />
      </main>

    </>

  );
}

export default App;
