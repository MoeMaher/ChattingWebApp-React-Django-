import React, { Component } from 'react';
import SignupComponent from '../SignUp/signup.component';
import ChatComponent from '../Chat/chat.component';
import SigninComponent from '../SignIn/signin.component';

export default class LayoutComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            viewSignup: false,
            viewChat: true,
            viewSignin: false,
            viewChats: false
        }

    }

    viewSignup = () => {
        this.setState({
            viewSignup: true,
            viewChat: false,
            viewSignin: false
        })
    }

    viewChat = () => {
        this.setState({
            viewSignup: false,
            viewChat: true,
            viewSignin: false
        })
    }

    viewChats = () => {
        if(this.state.viewChat) {
            this.setState({
                viewChats: !this.state.viewChats
            })
        }
    }

    viewSignin = () => {
        this.setState({
            viewSignup: false,
            viewChat: false,
            viewSignin: true
        })
    }

    render() {
        // load current page

        let body = null;

        if(this.state.viewChat) {
            body = (<ChatComponent viewChats={this.state.viewChats} />);
        }
        if(this.state.viewSignup) {
            body = (<SignupComponent />);
        }
        if(this.state.viewSignin) {
            body = (<SigninComponent />);
        }


        return (
            <main>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">MWC</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            {(this.state.viewChat)?<li className="nav-item active">
                                <a className="nav-link" onClick={this.viewChats} href="#">
                                    Chats {(this.state.viewChats)?<span className="sr-only">(current)</span>:null}
                                </a>
                            </li>:null}

                            {/*<li className="nav-item">*/}
                                {/*<a onClick={this.viewChat} className="nav-link" href="#">Chat</a>*/}
                            {/*</li>*/}
                        </ul>
                        {(this.state.viewSignin)?<form className="form-inline my-2 my-lg-0">
                            <button onClick={this.viewSignup} className="btn btn-secondary my-2 my-sm-0" type="submit">SignUp</button>
                        </form>
                            :null}
                        {(this.state.viewChat)?<form className="form-inline my-2 my-lg-0">
                                <button onClick={this.viewSignin} className="btn btn-secondary my-2 my-sm-0" type="submit">SignOut</button>
                            </form>
                            :null}
                        {(this.state.viewSignup)?<form className="form-inline my-2 my-lg-0">
                                <button onClick={this.viewSignin} className="btn btn-secondary my-2 my-sm-0" type="submit">SignIn</button>
                            </form>
                            :null}


                    </div>
                </nav>

                {body}
            </main>
        );
    }
}
