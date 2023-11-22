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
        localStorage.setItem('token', 'eyJhbGciOiJQUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDMxOTExODZ9.KfpMozJ2HGgcMTzF_ezLI13bUeZArFBLRVTJSznYHSbXVxtGD_cmzfVWuEoCC0tFOpCXwGn9XyhN-kK92Lf6MIe2-uJA_1xt-5DdyCuNRjpR7AjHxpkS0ZWI7cXJMmrgvq23sVX6hEOqg4y6-31JIqItZMSyWdwsk_gD6O7gBnGCvxgyHFMdmLs-DW7jsA4VVBAOFmYSqt3eYj8VnVMtQo59R7W5VLBvafQVEXNdY4D9a8iiqdhnMZbQbYzJK4fZDe0gJqFvU_W-2YPApiwsybyb3DpXuDaFbgZzRfi1H8HzaNX4aWZ04wDL_hUc4ZFUqfVLgTakm28LMuZonPKVKA');
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
