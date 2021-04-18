import React from 'react';
import SearchInput from "./SearchInput";
import axios from 'axios';
import DrinkCard from "./DrinkCard";

class Home extends React.Component {

    state = {
        response: []
    }

    onSearchSubmit = async (query) => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
        this.setState({response: response.data.drinks});
    }

    render() {
        return(
            <div>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <DrinkCard response={this.state.response}/>
            </div>
        )
    }
}

export default Home;