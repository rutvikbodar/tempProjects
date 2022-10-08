import React from "react";
import LanguageContext from "./LanguageContext";

class Field extends React.Component{

    static contextType = LanguageContext;

    render(){
        return <div className="ui field">
            <label>
                    <LanguageContext.Consumer>
                        {(value)=>value === 'english' ? 'Submit' : 'Voorleggen'}
                    </LanguageContext.Consumer>
            </label>
            <input />
        </div>
    }
}
export default Field;