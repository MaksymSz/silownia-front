import axios from 'axios';

// Adres URL serwera API
const BASE_URL = 'https://silowniaio.free.beeceptor.com';
export default axios.create({
    baseURL: BASE_URL
});

export const getUsers = () => {
    return axios.get(`${BASE_URL}/ingym`);
}

export const getCourses = () => {
    return axios.get(`${BASE_URL}/courses`);
}

export const enroll = (requestData) => {
    return axios.put(`${BASE_URL}/enroll`, JSON.stringify(requestData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const dashboard = () => {
    return axios.get(`${BASE_URL}/dashboard/${localStorage.getItem('id')}`)
}
export const qr = () => {
    return axios.get(`${BASE_URL}/qr/${localStorage.getItem('id')}`)
}
export const newQr = () => {
    return axios.post(`${BASE_URL}/newqr`, JSON.stringify(localStorage.getItem('id')), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
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