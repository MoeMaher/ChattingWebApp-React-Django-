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
    SearchUsers: (query, tokenObj) => {
        return axios.get(searchLink +
            '?limit=' + query.limit +
            '&friends=' + query.friends +
            '&offset=' + query.offset +
            '&search=' + query.search,
            {
                headers: {
                    "HTTP_AUTHORIZATION": 'jwt ' + tokenObj.token
                    // Cookie: "ga=GA1.1.1567129213.1525807849; csrftoken=bbtJ4bY3eP7JjIoxTlsACj86Omnhcec204Qp013Aa6FVEEv649ZxtePJA4TC6vqq; sessionid=lcrutwxqfd3xumo5fbkd2oeh33jtv9jp"
                }
            }
        );
    }

}


export default AppService;
