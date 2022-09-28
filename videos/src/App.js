import React from "react";
import Searchbar from "./Searchbar";
import youtube from './apis/youtube.js';

export default class App extends React.Component{

  state = { videos : [] };

onTermSubmit = async (term) =>{
  const response = await youtube.get('/search',{
    params : {
      q: term
    }
  });
  this.setState({videos : response.data.items});
}

  render(){
    return (
      <div>
        <Searchbar onTermSubmit={this.onTermSubmit} />
        <h1>i have {this.state.videos.length} videos</h1>
      </div>
    );
  }
}

