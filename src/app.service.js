import axios from 'axios';

var signupLink = 'http://localhost:8000/api/signup/';
var signinLink = 'http://localhost:8000/api-token-auth/';
var searchLink = 'http://localhost:8000/api/users/';

const AppService = {

    SignUp: (info) => {
        return axios.post(signupLink, info);
    },
    SignIn: (info) => {
        return axios.post(signinLink, info);
    },
    SearchUsers: (string) => {
        return axios.get(searchLink);
    }

}


export default AppService;
