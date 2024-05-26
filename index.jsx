import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Translator from './components/Translator';

function App() {
  return (
    <div>
      <Header />
      <Translator />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 