import React from 'react';
import './signup.component.css';
import AppService from '../../../app.service';

let username = React.createRef();
let first_name = React.createRef();
let last_name = React.createRef();
let password1 = React.createRef();
let password2 = React.createRef();
let email = React.createRef();


const SignupComponent = (props) => (
    <div className="jumbotron">
        <form>
            <fieldset>
                <legend>Sign Up</legend>
                <div className="form-group">
                    <label>First name</label>
                    <input ref={first_name} className="form-control" id="firstname" placeholder="Enter your First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input ref={last_name} className="form-control" id="secondname" placeholder="Enter your Last name" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input ref={username} className="form-control" id="username" placeholder="Enter Username" />
                    <small className="form-text text-muted">choose a unique username </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input ref={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input ref={password1} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input ref={password2}  type="password" className="form-control" id="exampleInputPassword1" placeholder="rewrite Password" />
                </div>

                <br />
            </fieldset>
        </form>
        <button onClick={ ()=>{ signUp({viewChat:props.viewChat})} } className="btn btn-primary">Submit</button>


    </div>
);

const signUp = ({ viewChat }) => {
    let info = {
        username: username.current.value,
        email: email.current.value,
        first_name: first_name.current.value,
        last_name: last_name.current.value,
        password1: password1.current.value,
        password2: password2.current.value
    }
    AppService.SignUp(info).then(res => {
        if (res.data.detail === 'Signed up successfully') {
            console.log('success');
            viewChat();
        } else {
            console.log(res);
        }
    }).catch(function (error) {
        console.log(error)
    });
}

export default SignupComponent;
