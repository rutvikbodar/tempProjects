import React from "react";
import Searchbar from "./Searchbar";
import youtube from './apis/youtube.js';
import VideosList from "./VideosList";
import VideoDetails from "./VideoDetails.js";

export default class App extends React.Component{

  state = { videos : [], selectedVideo : null };

onTermSubmit = async (term) =>{
  const response = await youtube.get('/search',{
    params : {
      q: term
    }
  });
  this.setState({videos : response.data.items});
}

componentDidMount(){
  this.onTermSubmit('f.r.i.e.n.d.s.');
}

onVideoSelect = video => {
  this.setState({selectedVideo : video});
}

  render(){
    return (
      <div className="ui container">
        <Searchbar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideosList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

