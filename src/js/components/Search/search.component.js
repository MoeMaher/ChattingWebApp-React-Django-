import React, {Component} from 'react';
import AppService from "../../../app.service";

export default class SearchComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chkbox: false,
            paginationCount: null,
            searchParams: {
                limit: 20,
                offset: 0
            },
            searchTotalCount: 50,
        }
        this.searchKey = React.createRef();
        this.checkboxFilterFriends = React.createRef();
        this.maxItemsInPage = 20;
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Search</label>
                    <input ref={this.searchKey} defaultChecked={this.state.chkbox} type="text" className="form-control" placeholder="Default input" id="inputDefault" />

                </div>
                <span className="lead">
                    Find other Users to chat with.
                    <p style={{float: 'right'}} className="lead">
                        <a className="btn btn-primary" onClick={this.search} href="#" role="button">Search</a>
                    </p>
                </span>
                <fieldset className="form-group">
                    <div className="form-check">
                        <label onClick={()=>{
                            // console.log(this.checkboxFilterFriends.current.checked);
                            // this.checkboxFilterFriends.current.checked = !Boolean(this.checkboxFilterFriends.current.checked);
                        }} className="form-check-label">
                            <input ref={this.checkboxFilterFriends} className="form-check-input" type="checkbox" />
                            Search from friends
                        </label>
                    </div>
                </fieldset>

                <hr className="my-4" />


                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        Mohamed Maher
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Wessam ali
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">

                    ostaz ahmeds</a>
                </div>

                <ul className="pagination pagination-sm">
                    {this.createPaginationView()}

                </ul>
            </div>

        );
    }

    search = () => {
        let SearchQuery = {
            search: this.searchKey.current.value,
            friends: this.checkboxFilterFriends.current.checked,
            limit: this.maxItemsInPage,
            offset: 0
        }
        AppService.SearchUsers(SearchQuery, this.props.token).then(res => {
            console.log(res);

        }).catch(function (error) {
            console.log('error');
            console.log(error.message);
            console.log(error);
        });
    }

    loadPage(offset) {
        // offset starting from zero

    }

    createPaginationView() {
        let temp = new Array(Math.ceil(this.state.searchTotalCount / 20));
        for (let i = 0; i < temp.length; i++) {
            temp[i] = i;
        }
        let output = [];
        temp.forEach((zero, index) => {
            output.push(
                <li key={index} className="page-item">
                    <a className="page-link" onClick={()=>{this.loadPage(index)}} href="#">{index + 1}</a>
                </li>)
        });
        return output;
    }


}
