import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from './LanguageContext';
import ColorContext from './ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  
  render(){
    return (
      <div className='ui container'>
          <LanguageStore >
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          <ColorContext.Provider value={'red'}>
              <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
