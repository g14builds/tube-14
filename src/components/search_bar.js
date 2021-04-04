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
            <div className="form-group">
                <label>Search Term:</label>
                <input 
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