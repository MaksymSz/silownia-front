import React from 'react';
import './center-content.css'
import {useNavigate} from "react-router-dom";

function LoginTest() {
    const navigate = useNavigate();
    function saveConstantValueToLocalStorage() {
        localStorage.setItem('userName', 'Jan');
        localStorage.setItem('pass', '2023-12-01');
        localStorage.setItem('ROLE', 'client');
        localStorage.setItem('id', '1');
        localStorage.setItem('token', 'eyJhbGciOiJQUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDAzMzQ5MDAsInJvbGUiOiJjbGllbnQifQ.JCtQK4zAi-8uiMamzMETXAfSLY0Dy3YpikKrCKcR9P1l2BDPs01S0tisq-GGlH6D2-y0ZTEFi39WyawXDngU-JBAv5wyUpIZgugSBP7fJFQJYMT7nqoba_Gbiuz4AQIm5ixeE37u_NfBMsrLrEJp7h-G0AxbiFwV1cNH6p7vkojV-lj4tgOAIloS4C2BEd9XM3OBYG4Un4aMz4Ob5Cv02LAadbbltURMQBDjuKDvzT71sKvHXun32RLJRudcBRLH7Df2IMOsuDla0ErQ3vexZSUtHbaZw7Zw3wkklAk7rjX0WXdWf2g-EVtSBM5XResWalTHZCv5WnnFCrUzGzCjvw');
    }
    const handleSaveClick = () => {
        saveConstantValueToLocalStorage();
        navigate('/');
        window.location.reload();
    };

    return (
        <div>
            <button onClick={handleSaveClick}>Zapisz stałą wartość do localStorage</button>
        </div>
    );
}

export default LoginTest;
