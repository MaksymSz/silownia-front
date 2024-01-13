import React from 'react';
import {useNavigate} from "react-router-dom";

/**
 * Komponent obsługujący wylogowanie się użytkownika z serwisu
 * @returns {Element} - Element do renderowania
 * @constructor
 */
function Logout() {
    const navigate = useNavigate();

    function removeDataFromLocalStorage() {
        localStorage.clear();
        localStorage.setItem('ROLE', 'guest');
        console.log('Wyczyszczono localStorage');
    }

    const handleRemoveClick = () => {
        removeDataFromLocalStorage();
        navigate('/');
        window.location.reload();
    };

    return (
        <div>
            <button onClick={handleRemoveClick}>Wyloguj</button>
        </div>
    );
}

export default Logout;
