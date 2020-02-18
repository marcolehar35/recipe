// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Nav from 'src/components/Nav';
import TopBar from 'src/components/TopBar';
import Home from 'src/components/Home';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <main className="main-content">
      <TopBar />

      <Home />
    </main>
  </div>
);

// == Export
export default App;
