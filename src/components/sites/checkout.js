import React, {useState} from "react";
import './qr.css';
import Alert from "react-bootstrap/Alert";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {coupon} from "../../axiosConfig";
import './checkout.css';
import {useNavigate} from "react-router-dom";

/**
 * Komponent odpowiedzialny za realizację płatności
 * @returns {Element} - Element do renderowania
 * @constructor
 */
function Checkout(){
    /**
     * @type {NavigateFunction}
     */
    const navigate = useNavigate();
    const [showContent, setShowContent] = useState(false);
    const handleButtonClick = () => {
        setShowContent(!showContent);
    };

    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    /**
     * @param e
     * @returns {Promise<void>}
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await coupon(localStorage.getItem('id'), inputValue);

            if (response.status === 200) {
                localStorage.setItem('pass', response.data.text);
                setErrorMessage('Udało się zrealizować bon');
                console.log(response.data);
                setTimeout(() => {
                    navigate('/checkout');
                    window.location.reload();
                }, 3000);
            } else {
                setErrorMessage('Wpisany bon jest niepoprawny');
            }
        } catch (error) {
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
                        {errorMessage && <Alert variant="secondary">{errorMessage}</Alert>}
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

