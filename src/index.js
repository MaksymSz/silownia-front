import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap\\css\\bootstrap.min.css'; // Import Bootstrap CSS
import App from './App';
import {HashRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
