import React, { Component } from 'react';
import SignupComponent from '../SignUp/signup.component';
import ChatComponent from '../Chat/chat.component';
import SigninComponent from '../SignIn/signin.component';
import SearchComponent from "../Search/search.component";

export class LayoutComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            loggedInUser: {
                username: null,
            },
            verificationToken: null,
            viewSignup: false,
            viewChat: false,
            viewSignin: false,
            viewChats: false,
            viewSearch: true
        }

    }

    viewSearch = () =>{
        this.setState({
            viewSignup: false,
            viewChat: false,
            viewSignin: false,
            viewSearch: true
        })
    }

    logIn = (token, username)=>{
        let loggedInUser = {
            username,
        }
        this.setState({loggedIn: true, loggedInUser});
        this.setState({verificationToken: token});
    }

    printState = ()=> {
        console.log(this.state);
    }

    viewSignup = () => {
        this.setState({
            viewSignup: true,
            viewChat: false,
            viewSignin: false,
            viewSearch: false
        })
    }

    viewChat = () => {
        console.log('view the chat')
        this.setState({
            viewSignup: false,
            viewChat: true,
            viewSignin: false,
            viewSearch: false
        })
    }

    viewChats = () => {
        this.setState({
            viewChats: !this.state.viewChats
        })
    }

    viewSignin = () => {
        this.setState({
            viewSignup: false,
            viewChat: false,
            viewSignin: true,
            viewSearch: false
        })
    }

    render() {
        // load current page

        let body = null;

        if(this.state.viewChat) {
            body = (<ChatComponent token={this.state.verificationToken} viewChats={this.state.viewChats} />);
        }
        if(this.state.viewSignup) {
            body = (<SignupComponent  />);
        }
        if(this.state.viewSignin) {
            body = (<SigninComponent login={this.logIn} viewChat={this.viewChat} />);
        }
        if(this.state.viewSearch) {
            body = (<SearchComponent token={this.state.verificationToken} viewChat={this.viewChat} />);
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
                            {(this.state.loggedIn && !this.state.viewChat)?<li className="nav-item active">
                                <a className="nav-link" onClick={this.viewChat} href="#">
                                    Chat {(this.state.viewChat)?<span className="sr-only">(current)</span>:null}
                                </a>
                            </li>:null}
                            {(this.state.loggedIn && this.state.viewChat)?<li className="nav-item active">
                                <a className="nav-link" onClick={this.viewChats} href="#">
                                    Current Chats {(this.state.viewChats)?<span className="sr-only">(current)</span>:null}
                                </a>
                            </li>:null}
                            {(this.state.loggedIn)?<li className="nav-item active">
                                <a className="nav-link" onClick={this.viewSearch} href="#">
                                    Search to Chat {(this.state.viewSearch)?<span className="sr-only">(current)</span>:null}
                                </a>
                            </li>:null}
                           <li className="nav-item active">
                                <a className="nav-link" onClick={this.printState} href="#">
                                    printState
                                </a>
                            </li>
                        </ul>
                        {(this.state.viewSignin)?<form className="form-inline my-2 my-lg-0">
                            <button onClick={this.viewSignup} className="btn btn-secondary my-2 my-sm-0" type="submit">SignUp</button>
                        </form>
                            :null}
                        {(this.state.viewChat || this.state.viewSearch)?<form className="form-inline my-2 my-lg-0">
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
