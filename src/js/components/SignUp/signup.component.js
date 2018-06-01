import React from 'react';
import './signup.component.css';
const SignupComponent = () => (
    <div className="jumbotron">
        <form>
            <fieldset>
                <legend>Sign Up</legend>
                <div className="form-group">
                    <label>Full name</label>
                    <input className="form-control" id="username" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" id="username" placeholder="Enter Username" />
                    <small className="form-text text-muted">choose a unique username </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="rewrite Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleTextarea">Bio</label>
                    <textarea className="form-control" id="BioTextarea" rows="3" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputFile">Upload Profile Picture</label>
                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                </div>
                <fieldset className="form-group">
                    <legend>Gender</legend>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                                Male
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                Female
                        </label>
                    </div>
                    <div className="form-check disabled">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
                                Don't want to say
                        </label>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    </div>
);

export default SignupComponent;
