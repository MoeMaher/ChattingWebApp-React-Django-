import React, {Component} from 'react';

export default class SearchComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
        this.searchKey = React.createRef();
        this.checkboxFilterFriends = React.createRef();
    }


    render() {
        return (
            <div className="jumbotron">
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Search</label>
                    <input ref={this.searchKey} type="text" className="form-control" placeholder="Default input" id="inputDefault" />

                </div>
                <p className="lead">
                    Find other Users to chat with.
                    <p style={{float: 'right'}} className="lead">
                        <a className="btn btn-primary " href="#" role="button">Search</a>
                    </p>
                </p>
                <fieldset className="form-group">
                    <div className="form-check">
                        <label onClick={()=>{
                            console.log(this.checkboxFilterFriends.current.checked);
                            this.checkboxFilterFriends.current.checked = !Boolean(this.checkboxFilterFriends.current.checked);
                        }} className="form-check-label">
                            <input ref={this.checkboxFilterFriends} className="form-check-input" type="checkbox" value="" checked="true" />
                            Search from friends
                        </label>
                    </div>
                </fieldset>

                <hr className="my-4" />


                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">
                        Mohamed Maher
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Wessam ali
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">

                    ostaz ahmeds</a>
                </div>

            </div>

        );
    }

    search() {
        let info ={
            search: this.searchKey.current.value
            // friends: Boolean | default = False //filters friends
            // limit: Integer | given in response.next /previous
            // offset: Integer | given in response.next /previous
        }
    }


}
