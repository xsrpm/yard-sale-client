/**
 *
 * @typedef {Object} User
 * @property {string} username
 * @property {string} password
 */

import config from '../config';

/**
 * It sends a POST request to the server with the username and password, and returns the response from
 * the server
 * @param {string} username - The username of the user
 * @param {string} password - The password of the user
 * @returns {string} - Token.
 */

const postLogin = async (loginData) => {
    /** @type {User} */
    const resp = window
        .fetch(`${config.api}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then((res) => {
            // console.log({ res })
            if (!res.ok) {
                if (res.status === 401) {
                    return res.json();
                }
                throw new Error('Network response was not OK');
            }
            return res.json();
        })
        .catch((err) => {
            throw err;
        })
        .then((data) => {
            // console.log(data)
            if (data.error) {
                console.error({ data });
                throw new Error(data.error.message);
            }
            return { data, loading: false };
        })
        .catch((err) => {
            console.error(err);
            return { error: err, loading: false };
        });
    return resp;
};

export default postLogin;
