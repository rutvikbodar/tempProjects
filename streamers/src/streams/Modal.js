import React from 'react';
import ReactDOM  from 'react-dom';
import {connect} from 'react-redux';

class Modal extends React.Component{

    render(){
        console.log(this.props);
        return ReactDOM.createPortal(
            <div className="ui dimmer modals visible active" onClick={this.props.onDismiss}>
                <div onClick={event => event.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">
                        {this.props.title}
                    </div>
                    <div className="content">
                        {this.props.content}
                        <div className='actions'>
                            {this.props.action}
                        </div>
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        );
    };
}

const mapStateToProps = (state,ownProps) =>{
    return state;
}

export default connect(mapStateToProps,{})(Modal);