import React, { useState } from 'react';
import '../App.css'; // Importuj plik CSS

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const updateProgress = () => {
        const newProgress = parseFloat(inputValue);
        if (!isNaN(newProgress) && newProgress >= 0 && newProgress <= 100) {
            setProgress(newProgress);
        }
    };

    return (
        <div className="progress-container">
            <div className="progress vertical">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: `${progress}%` }}
                ></div>
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Wprowadź postęp (0-100)"
            />
            <button onClick={updateProgress}>Aktualizuj postęp</button>
        </div>
    );
};

export default ProgressBar;
