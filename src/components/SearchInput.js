import React from "react";
import { Link } from "react-router-dom";

class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    state = {
        query: ''
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.query);
    }

    render() {
        return(
            <div className='ui container' style={{textAlign: "center"}}>
                <form className="ui icon input" onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Search for a cocktail 🍸" style={{ width: "50vw"}}
                           onChange={(event) => {
                               this.setState(this.setState({ query: event.target.value }))
                           }}
                    />
                    <i className="search link icon"></i>
                </form>
                </div>
        )
    }
}

export default SearchInput;