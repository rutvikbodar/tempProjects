import './App.css';
import React from 'react';

class App extends React.Component{

  state = {lat : "null"}

  componentDidMount(){
    console.log("component is mounted");
  }
  render(){
    console.log("Hi from the component");
    return <div>Latitude : {this.state.lat}</div>
  }
}

export default App;
