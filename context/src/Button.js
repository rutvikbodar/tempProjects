import React from "react";
import Context from "./LanguageContext";
import ColorContext from "./ColorContext";

class Button extends React.Component{

    static contextType = Context;

    renderButton = (color) => {
        return (
            <button className={`ui ${color} button`}>
                    <Context.Consumer>
                        {(value)=>value.language === 'english' ? 'Submit' : 'Voorleggen'}
                    </Context.Consumer>
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