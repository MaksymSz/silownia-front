import React from 'react';
import './center-content.css'
import {useNavigate} from "react-router-dom";

function LoginTest() {
    const navigate = useNavigate();
    function saveConstantValueToLocalStorage() {
        localStorage.setItem('userName', 'Jan');
        localStorage.setItem('pass', '2023-12-01');
        localStorage.setItem('ROLE', 'manager');
        localStorage.setItem('id', '1');
        localStorage.setItem('token', 'eyJhbGciOiJQUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDczMDAzMzB9.Lg1hPE8Z7kjvH4arYLzOCq2y95oS7OtAHkYrxpWFm3DcXGz3SXluGTbfJ1mUJ1QAbqp_4EVDeGPbB0fIDOtrMJVVbXNkCDNO-XOtny3BH8v2aJz54Y2dPU2t1f4Ni6xixfMnIXR4uV1pPtt5DxRMjlhAV8AMUl3ZBIZtqCF-lqMWZWiXmDNqbK0FmBwEYRX1mjYLbvTFzAA7KpoJH-GJmv1bXE0rVXPgBxBun5wFTInx6GRi_8eKXLecVxD8jrg5_3ooYNDVmduN3EZg-BXK_8-6TLycLvKuTp7ryX4nh4jjLWUP5Ku4QwhFF_rttU6Hs8jKU0AyA6t5RKdwtKvKiw');
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
