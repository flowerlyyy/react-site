import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './pages/Header/Header';
import { Footer } from './pages/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage/>
      </main>
     <Footer />
    </div>
  );
}

export default App;
