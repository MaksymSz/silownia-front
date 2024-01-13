import axios from 'axios';

/**
 *
 * @type {string} Bazowe url dla zapytań axios
 */
const BASE_URL = 'https://silowniaio.free.beeceptor.com';

axios.create({
    baseURL: BASE_URL
});
/**
 * Metoda obsługująca endpoint '/ingym'
 * @returns {Promise<axios.AxiosResponse<any>>}
 */

export const getUsers = () => {
    return axios.get(`${BASE_URL}/ingym`);
}
/**
 * Metoda obsługująca endpoint '/courses'
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getCourses = () => {
    return axios.get(`${BASE_URL}/courses`);
}
/**
 * Metoda obsługująca endpoint '/enroll/
 * @param requestData - informacje potrzebne do wykonania zapytania
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const enroll = (requestData) => {
    return axios.put(`${BASE_URL}/enroll`, JSON.stringify(requestData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
/**
 * Metoda obsługująca endpoint '/dashboard{id}'
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const dashboard = () => {
    return axios.get(`${BASE_URL}/dashboard/${localStorage.getItem('id')}`)
}
/**
 * Metoda obsługująca endpoint '/qr{id}'
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const qr = () => {
    return axios.get(`${BASE_URL}/qr/${localStorage.getItem('id')}`)
}
/**
 * Metoda obsługująca endpoint '/newqr{id}'
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const newQr = () => {
    return axios.post(`${BASE_URL}/newqr`, JSON.stringify(localStorage.getItem('id')), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
/**
 * Metoda obsługująca endpoint '/login'
 * @param {string} email - email użytkownika
 * @param {string} password - hasło użytkownika
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const login = (email, password) => {
    return axios.post(`${BASE_URL}/login`, {
        email: email,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
/**
 * Metoda obsługująca endpoint '/coupon'
 * @param {int} id - id użytkownika
 * @param {string} coupon - numer kuponu
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const coupon = (id, coupon) => {
    return axios.post(`${BASE_URL}/coupon`, {
        id: id,
        coupon: coupon
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
/**
 * Metoda obsługująca endpoint '/newcourse'
 * @param {string} title - tytuł kursu
 * @param {string} description - opis kursu
 * @param {Date} date - data rozpoczęcia kursu
 * @param {???} time - czas rozpoczęcia kursu
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const newcourse = (title, description, date, time) => {
    return axios.post(`${BASE_URL}/newcourse`, {
        id: localStorage.getItem('id'),
        title: title,
        trainer: localStorage.getItem('userName'),
        description: description,
        data: date,
        time: time
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
/**
 * Metoda obsługująca endpoint '/register'
 * @param {string} email -email użytkownika
 * @param {string} password - hasło użytkownika
 * @param {string} name - imię użytkownika
 * @param {string} surname - nazwisko użytkownika
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const register = (email, password, name, surname) => {
    return axios.post(`${BASE_URL}/register`, {
            email: email,
            password: password,
            name: name,
            surname: surname
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        })
}
/**
 * Metoda obsługująca endpoint '/generate'
 * @param {Date} from - Data początkowa podsumowanie
 * @param {Date} to - Data zamykająca podsumowanie
 * @returns {Promise<axios.AxiosResponse<any>>} - Wynik zapytania
 */
export const generate = (from, to) => {
    return axios.post(`${BASE_URL}/generate`, {
            from: from,
            to: to
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        })
}