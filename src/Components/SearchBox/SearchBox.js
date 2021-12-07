import React from 'react';
import "./SearchBox.css";
import PropTypes from "prop-types";

class SearchBox extends React.Component{

    constructor(){
        super();
        this.state = {
            searchParam: ""
        };

    }

    onInputChange = (e) => {
        this.setState({
            searchParam: e.target.value
        })
    };

    onClickSubmit = () => {
        this.props.updateFetch(this.state.searchParam);
    }

    render(){
        return (

            <div className="container searchBox">
                <input type="text" placeholder="Search" onChange={this.onInputChange}/>
                <button onClick={this.onClickSubmit}>
                    {'>'}
                </button>
    
            </div>
    
        );
    }
}

SearchBox.propTypes = {

    updateFetch: PropTypes.func.isRequired

};

export default SearchBox;
