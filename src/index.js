import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap\\css\\bootstrap.min.css'; // Import Bootstrap CSS
import App from './App';
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
    <React.StrictMode>
        <CookiesProvider>
            <App/>
        </CookiesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
