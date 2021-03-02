import React, { Component } from 'react';

class SearchBar extends Component {
        state ={
                input : "",
                placeholder : "Search",
                backup_placeholder : "Search"
        }

        clickHandler = () => {
                // console.log(this.state.input)
                this.props.bring_up_data_from_search_bar(this.state.input);
        }

        submitHandler = (e) => {
                e.preventDefault();
        }

        render() {
            return (
                <div style={{padding:"20px", borderBottom:"2px solid #55b5d4",textAlign:"center" , margin:"0px 0px 5px"}}>
                    <form onSubmit={this.submitHandler}>     
                        {/* this class names is related to "semantic ui" css library */}
                        <div className="ui container big action input">  
                            <input value={this.state.input} type="text" name="search" placeholder={this.state.placeholder}  
                            onChange={(e)=> this.setState({input:e.target.value})}
                            onFocus={()=>this.setState({placeholder:""})}
                            onBlur={()=>this.setState({placeholder : this.state.backup_placeholder})}
                            />
                            <button className="ui button blue" onClick={this.clickHandler}>Search</button> 
                        </div>
                    </form>
                </div>
            );
        }
}

export default SearchBar;
