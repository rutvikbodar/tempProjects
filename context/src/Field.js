import React from "react";
import Context from "./LanguageContext";

class Field extends React.Component{

    static contextType = Context;

    render(){
        return <div className="ui field">
            <label>
                    <Context.Consumer>
                        {(value)=>value.language === 'english' ? 'Submit' : 'Voorleggen'}
                    </Context.Consumer>
            </label>
            <input />
        </div>
    }
}
export default Field;