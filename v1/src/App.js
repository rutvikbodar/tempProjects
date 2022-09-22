import './App.css';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{

  onSubmit(data){
    console.log(data);
  }

  render(){
    return <div className='ui container' style={{marginTop : '50px'}}>
      <SearchBar onSubmit={this.onSubmit} />
    </div>
  }
}

export default App;
