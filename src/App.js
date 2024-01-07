import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './components/sidebar';
import HomePage from './components/sites/homePage';
import LoginTest from './components/sites/loginTest';
import Register from './components/sites/register';
import Logout from "./components/sites/logout";
import Qr from "./components/sites/qr";
import Profile from "./components/sites/profile";
import Courses from "./components/sites/courses";
import Login from "./components/sites/login";
import Checkout from "./components/sites/checkout";
import {verifyToken} from "./utils";
import AddCourse from "./components/sites/addCourse";
import Report from "./components/sites/report";

function App() {

    const isTokenValid = verifyToken(localStorage.getItem('token'));

    return (
        <Router>
            <Sidebar/>
            <Routes>
                {/* Dostępne dla wszystkich */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/loginTest" element={<LoginTest/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                {/* Dostępne po zalogowaniu */}
                {isTokenValid ? (
                    <>
                        <Route path="/courses" element={<Courses/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/qr" element={<Qr/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        {localStorage.getItem('ROLE') === 'trainer' ? (
                            <Route path="/addcourse" element={<AddCourse/>}/>
                        ) : null}
                        {localStorage.getItem('ROLE') === 'manager' ? (
                            <Route path="/report" element={<Report/>}/>
                        ) : null}
                    </>
                ) : null}
            </Routes>
        </Router>
    );
}

export default App;
