import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";
import './addCourse.css';
import Alert from "react-bootstrap/Alert";
import {register} from "../../axiosConfig";
import {useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [email, setEmail] = useState('test');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }
    const handleRepPasswordChange = (event) =>{
        setRepPassword(event.target.value);
    }
    const handleNameChange = (event) =>{
        setName(event.target.value);
    }
    const handleSurnameChange = (event) =>{
        setSurname(event.target.value);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (password !== repeatedPassword){
            setShowAlert(true);
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        register(email,password,name, surname)
            .then(response =>{
                console.log('Registration was successful');
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

    };

    return (
        <Container className="add-course-container">

            <center>
                <h1>
                    Rejestracja
                </h1>
            </center>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Adres email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Adres email"
                            onClick={handleEmailChange}
                        />
                    </Form.Group>
                    </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Hasło</Form.Label>
                        <div className="password-input">
                            <Form.Control
                                type="password"
                                placeholder="Wprowadź hasło"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Potwierdź</Form.Label>
                        <div className="password-input">
                            <Form.Control
                                type="password"
                                placeholder="Potwierdź hasło"
                                name="confirmPassword"
                                value={repeatedPassword}
                                onChange={handleRepPasswordChange}
                                required
                            />
                        </div>
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Imię</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Imię"
                            onClick={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nazwisko"
                            onClick={handleSurnameChange}
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Zgadzam się na przetwarzanie moich danych osobowych"
                        feedback="Pole wymagane"
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Dołącz</Button>
                {showAlert && (
                    <div className="alert-container">
                        <Alert show={showAlert} onClose={() => setShowAlert(false)} variant="danger" dismissible>
                            Hasła nie są identyczne
                        </Alert>
                    </div>
                )}
            </Form>
        </Container>
    );
}

export default Register;
