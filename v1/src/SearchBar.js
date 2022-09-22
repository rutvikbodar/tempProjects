import React from "react";


class SearchBar extends React.Component{

    state = {text : ''}

    onFormSubmit= (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }

    render(){
        return <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <label>Image Search</label>
                <input type={'text'} placeholder={"search...."} onChange={(event) => this.setState({text : event.target.value})} value={this.state.text} ></input>
            </form>
        </div>;
    }
}

export default SearchBar;