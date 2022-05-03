import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router';
import postLogin from '../services/login';

/**
@typedef {Object} LoginData
@property {string} username
@property {string} password
*/

const useLogin = () => {
    const navigate = useNavigate();
    /**
     * It takes a loginData object, posts it to the server, and if the response is successful, it stores
     * the token in sessionStorage and navigates to the home page.
     * @param {LoginData} loginData - {
     */
    const login = (loginData) => {
        console.log(loginData)
        postLogin(loginData).then((resp) => {
            // console.log(resp)
            // stop loading
            if (!resp.error) {
                const decoded = jwtDecode(resp.data.token);
                window.sessionStorage.setItem('jwtToken', resp.data.token);
                window.sessionStorage.setItem('username', decoded.username);
                window.sessionStorage.setItem('name', decoded.name);
                // console.log(decoded)
                navigate('/');
            }
            return resp;
        });
    };
    // start loading

    return { login };
};

export default useLogin;
