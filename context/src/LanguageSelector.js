import React from "react";
import Context from './LanguageContext';

class LanguageSelector extends React.Component{
    
    static contextType = Context;
    
    render(){
        return (
        <Context.Consumer>
            {(value)=>{
                return (<div>
                    Select a language : 
                    <i className="flag us" onClick={()=>{value.onLanguageChange('english')}}></i>
                    <i className="flag nl" onClick={()=>{value.onLanguageChange('dutch')}}></i>
                  </div>)
            }}
        </Context.Consumer>
        )
    }
}

export default LanguageSelector;