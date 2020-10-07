import React from 'react';    
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';


function App() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Section />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
