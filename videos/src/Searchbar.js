import React from "react";

export default class Searchbar extends React.Component{

    state = {term : ""}

    onChangeHandler = (value) =>{
        this.setState({term : value.target.value});
        console.log(this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form action="" className="ui form">
                    <div className="field">
                        <label htmlFor="">
                            Video Search
                        </label>
                        <input type={"text"} value={this.state.term} onChange={this.onChangeHandler}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}