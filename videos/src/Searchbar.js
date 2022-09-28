import React from "react";

export default class Searchbar extends React.Component{

    state = {term : ""}

    onChangeHandler = (value) =>{
        this.setState({term : value.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} action="" className="ui form">
                    <div className="field">
                        <label htmlFor="">
                            Video Search
                        </label>
                        <input type={"text"} onSubmit={this.onFormSubmit} onChange={this.onChangeHandler}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}