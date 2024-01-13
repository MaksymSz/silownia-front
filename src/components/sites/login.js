import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './login.css';
import {login} from "../../axiosConfig";
import {useNavigate} from "react-router-dom";

/**
 * Komponent odpowiedzialny za podstronę logowania
 * @returns {Element} - Element do renderowania
 * @constructor
 */
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    /**
     * @param e
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        login(email, password)
            .then(response => {
                console.log('Udało sie zalogować');
                localStorage.setItem('userName', response.data.name);
                localStorage.setItem('pass', response.data.gymPass);
                localStorage.setItem('ROLE', response.data.role);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('token', response.data.token);
                navigate('/');
            })
            .catch(error => {
                console.error('Invalid data received');
                window.location.reload();
            })

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Twój adres email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Twoje hasło"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Zaloguj
                </Button>
            </Form>
        </div>
    );
};

export default Login;
