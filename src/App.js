import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/sites/HomePage';
import Profile from './components/sites/profile';
import Courses from './components/sites/courses';
import Qr from './components/sites/qr';
import Logout from './components/sites/logout';
import Sidebar from './components/Sidebar';
import Login from './components/sites/login'
import Register from "./components/sites/register";

const ROLES = {
    'User': 1000,
    'Trainer': 2000,
    'Admin': 3000
}

function App() {
    return (
        <Router>
            <Sidebar/>
            <Routes>
                {/*dostępne dla wszystkich*/}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                {/*dostępne po zalogowaniu*/}
                <Route path="/courses" element={<Courses/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/qr" element={<Qr/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </Router>
    );
}

export default App;
