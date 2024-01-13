import {jwtDecode} from 'jwt-decode';

/**
 * Function to verify token validity
 * @param {string} token - JSON Web Token
 * @returns {boolean} - ważność tokenu
 * @example
 *  // Przykładowe użycie:
 *  const isValidToken = verifyToken('some-token-string');
 *  if (isValidToken) {
 *    // Token jest ważny
 *  } else {
 *    // Token jest nieprawidłowy lub nieobecny
 *  }
 */
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