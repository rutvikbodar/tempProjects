import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {lat : null}

    console.log("dahgad");
    this.setState({lat : "adjkshdak"});
  }

  componentDidMount(){
    console.log("component is mounted");
  }
  render(){
    console.log("Hi from the component");
    return <div>Latitude : {this.state.lat}</div>
  }
}

export default App;
