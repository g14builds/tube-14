import React, { Component } from 'react';


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
        
        return (
            <div className="input-group input-group-lg tube-14-search-bar">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        Search YouTube:
                    </span>
                </div>
                <input autofocus
                    className="form-control form-control-lg"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
        
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchUpdate(term);
    }


}


export default SearchBar;