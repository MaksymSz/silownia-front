import React, {useState} from "react";
import './qr.css';
import Alert from "react-bootstrap/Alert";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {coupon} from "../../axiosConfig";
import './checkout.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Checkout(){
    const navigate = useNavigate();
    const [showContent, setShowContent] = useState(false);
    const handleButtonClick = () => {
        setShowContent(!showContent);
    };

    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await coupon(localStorage.getItem('id'), inputValue);

            if (response.status === 200) {
                localStorage.setItem('pass', response.data.text);
                console.log(response.data);
                navigate('/checkout');
                window.location.reload();
            } else {
                // Odpowiedź nie jest OK - wyświetl komunikat
                setErrorMessage('Wpisany bon jest niepoprawny');
            }
        } catch (error) {
            // Błąd zapytania - wyświetl komunikat
            setErrorMessage('Wystąpił błąd podczas wysyłania zapytania');
        }
    };

    return(
        <div className="App">
            <center>
                <br/>
                <div className="button-container">
                    <button
                        className={`button`}>
                        Płatność kartą
                    </button>
                    <button
                        className={`button ${showContent ? 'active' : ''}`}
                        onClick={handleButtonClick}
                    >
                        {showContent ? 'Rezygnuj' : 'Zrealizuj bon'}
                    </button>
                </div>
                {showContent && (
                    <div className="checkout-form-container">
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Wpisz swój bon:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz tutaj"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Wyślij
                            </Button>
                        </Form>
                    </div>
                )}
            </center>
        </div>
    )
}

export default Checkout;

