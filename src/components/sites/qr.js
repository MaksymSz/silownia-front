import React, {useEffect, useState} from 'react';
import QRCode from 'react-qr-code';
import './qr.css';
import {qr, newQr} from "../../axiosConfig";
import Alert from "react-bootstrap/Alert";


function Qr() {
    const [value, setValue] = useState('0');
    const back = '#FFFFFF';
    const fore = '#000000';
    const qrSize = 200;

    const [showContent, setShowContent] = useState(false);
    const [userID] = useState(localStorage.getItem('id') || '200');
    const [userKey, setUserKey] = useState('0');
    const handleButtonClick = () => {
        setShowContent(!showContent);
    };

    useEffect(() => {
        const getUserKey = async () => {
            try {
                const response = await qr(userID);
                setUserKey(response.data.userKey);
            } catch (error) {
                console.error('Błąd pobrania QR:', error);
            }
        };
        getUserKey();
    }, []);


    return (
        <div className="App">
            <center>
                <br/>
                <div className="button-container">
                    <button
                        className={`button ${showContent ? 'active' : ''}`}
                        onClick={handleButtonClick}
                    >
                        {showContent ? 'Ukryj kod QR' : 'Pokaż kod QR'}
                    </button>
                    <DelayedButton onClick={setValue}/>
                </div>
                {showContent && (
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        {value && (
                            <QRCode
                                title="QR"
                                value={userKey}
                                bgColor={back}
                                fgColor={fore}
                                size={qrSize}
                            />
                        )}
                    </div>
                )}
            </center>
        </div>
    );
}

export default Qr;
const DelayedButton = ({ onClick }) => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000); // Ukrycie alertu po 3 sekundach
    };

    const handleButtonClick = () => {
        if (!isButtonDisabled) {
            setButtonDisabled(true);
            newQr()
                .then((response) => {
                    console.log('Wygenerowano nowy kod QR', response.data);
                })
                .catch((error) => {
                    console.error('Błąd generowania nowego kodu QR', error);
                });

            // Ustawienie opóźnienia na 5 sekund przed odblokowaniem przycisku
            setTimeout(() => {
                setButtonDisabled(false);
            }, 5000);
        }
        handleShowAlert();
    };

    return (
        <div>
            <button
                className={`button ${isButtonDisabled ? 'disabled' : ''}`}
                onClick={handleButtonClick}
            >
                Wygeneruj nowy kod QR
            </button>
            {showAlert && (
                <div className="alert-container">
                    <Alert show={showAlert} variant="secondary" dismissible>
                        Załaduj ponownie stronę aby wyświetlić nowy kod QR
                    </Alert>
                </div>
            )}
        </div>
    );
};
