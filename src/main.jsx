import ReactDOM from 'react-dom/client';
import React from 'react';


import 'react-toastify/dist/ReactToastify.css';
import "./app.css";

import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
