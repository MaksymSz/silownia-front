import {jwtDecode} from 'jwt-decode';

export const verifyToken = (token) => {
    if (!token) {
        return false; // Brak tokenu, token jest nieprawidłowy
    }

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // czas w sekundach

        if (decodedToken.exp < currentTime) localStorage.clear();
        return decodedToken.exp > currentTime;
    } catch (error) {
        console.error('Błąd dekodowania tokenu:', error);
        return false;
    }
};
