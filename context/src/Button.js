import React from "react";
import LanguageContext from "./LanguageContext";
import ColorContext from "./ColorContext";

class Button extends React.Component{

    static contextType = LanguageContext;

    renderButton = (color) => {
        return (
            <button className={`ui ${color} button`}>
                    <LanguageContext.Consumer>
                        {(value)=>value === 'english' ? 'Submit' : 'Voorleggen'}
                    </LanguageContext.Consumer>
                </button>
        );
    }
    render(){
        return <ColorContext.Consumer>
            {(color)=>
                this.renderButton(color)
            }
        </ColorContext.Consumer>
    }
}

export default Button;