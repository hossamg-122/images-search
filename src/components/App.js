import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult'


class App extends Component {
    state ={
        results : [],
       
    }

     bring_up_data_from_search_bar = async (data) => {
        //  console.log(data);
       const resp= await axios.get("https://api.unsplash.com/search/photos",{
        params : {query : data},
        headers : {Authorization: "Client-ID saumTUegYeHzGx0_ljM_cDxWJwaJV_2SQjXI_nG547w"}
        });
    
        this.setState({results : resp.data.results })
    } 

    

    render() {
       
        return (
            <div>
                <h1 className="ui header blue container">Image Search </h1>
                <SearchBar bring_up_data_from_search_bar={this.bring_up_data_from_search_bar} />
                <SearchResult results={this.state.results}/>
            </div>
        );
    }
}

export default App;


