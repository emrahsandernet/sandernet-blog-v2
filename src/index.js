import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContex';
import { ThemeContextProvider } from './context/ThemeContext';


// change body background color




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  
  <ThemeContextProvider>
    
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ThemeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
