import React from 'react';
import './App.css';
import Header from './views/header/Header';
import Footer from './views/footer/Footer';

function App() {
  return (
      <div>
        <Header/> 
      <section className="footer">
        <Footer/>
      </section>
      </div>
  )
}

export default App;