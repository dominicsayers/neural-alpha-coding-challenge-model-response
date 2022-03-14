import React from 'react';
import logo from './logo.svg';
import './App.css';

import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC3nWV-2y-UZOhFWHMq7fxKwF3LWZviizE',
  authDomain: 'neural-alpha-coding-challenge.firebaseapp.com',
  projectId: 'neural-alpha-coding-challenge',
  storageBucket: 'neural-alpha-coding-challenge.appspot.com',
  messagingSenderId: '909311194976',
  appId: '1:909311194976:web:a0b0f19ac4dfd4705f5005',
  measurementId: 'G-CEZPDYKPPS',
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
