import React, {Component} from 'react';
import './chat.component.css'

export default class ChatComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listOfOpenChats: [],
            currentChat: null,

        }

    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                {(this.props.viewChats)?<div className="list-group listOfChats">
                        <a href="#" className="list-group-item list-group-item-action active">
                            <span>Cras justo odio</span>
                            <span style={{float: 'right'}} className="chatNotify badge badge-primary badge-pill">8</span>

                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <span>Dapibus in maher gamed gdn </span>
                            <span style={{float: 'right'}} className="chatNotify badge badge-primary badge-pill">18</span>

                        </a>
                        <a href="#" className="list-group-item list-group-item-action disabled">
                            <span style={{marginRight: '20%'}}>Morbi leo risus</span>
                            <span style={{float: 'right'}} className="chatNotify badge badge-primary badge-pill">8234</span>

                        </a>
                    </div>
                    :null}

                <div style={{marginRight:'auto',marginLeft:'auto', backgroundColor: '#00000000'}} className="jumbotron">

                    <h1 className="display-3">Mohamed Maher</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling.</p>
                    <br />
                    <table className="table ">
                        <thead>
                        <tr>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>This is a message from the other user</td>
                        </tr>
                        <tr>
                            <td>Another message from the other user to me bardo</td>
                        </tr>
                        <tr>
                            <td><p style={{float:'right'}}>Now I'm sending message from me to him</p></td>
                        </tr>

                        </tbody>
                    </table>

                </div>
                <span className="enterMessage lead jumbotron" >
                    <div className="form-group">
                        <input type="text" className="form-control main-input" placeholder="Default input" id="inputDefault" />
                        {/*<a className="btn btn-primary btn-lg" style={{float:'right'}} href="#" role="button">Send</a>*/}
                    </div>
                </span>
            </div>

        );
    }
}
