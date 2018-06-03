import React from 'react';
import './signin.component.css';
import AppSerice from '../../../app.service';

let username = React.createRef();
let password = React.createRef();

const SigninComponent = (props) => (
    <div style={{width: '40%'}} className="jumbotron">
        <form>
            <fieldset>
                <legend>Sign In</legend>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input ref={username} className="form-control" id="username" placeholder="Enter your username" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input ref={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
            </fieldset>
        </form>
        <button type="submit" onClick={()=>{signIn({viewChat:props.viewChat, login: props.login})}} className="btn btn-primary">Login</button>
    </div>
);

const signIn = ({viewChat , login}) => {
    let auth = {
        username: username.current.value,
        password: password.current.value
    }
    console.log(auth);
    AppSerice.SignIn(auth).then(res => {
        if(res.status === 200){
            login(res.data, auth.username);
            viewChat();
        }

    }).catch(function (error) {
        console.log('error');
        console.log(error.message);
        console.log(error);
    });

}

export default SigninComponent;
