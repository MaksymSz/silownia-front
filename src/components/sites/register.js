import React, { useState } from 'react';

function Register() {
    const [text, setText] = useState(''); // Inicjalizacja stanu tekstu

    // Obsługa zmiany tekstu w polu tekstowym
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    // Obsługa zapisywania tekstu do localStorage
    const handleSaveText = () => {
        localStorage.setItem('userName', text);
        alert('Tekst został zapisany w localStorage.');
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Wpisz tekst"
            />
            <button onClick={handleSaveText}>Zapisz do localStorage</button>
        </div>
    );
}

export default Register;
