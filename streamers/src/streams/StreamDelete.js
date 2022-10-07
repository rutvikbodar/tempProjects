import Modal from "./Modal";
import React from "react";
import history from '../history';

class StreamDelete extends React.Component {

    onDismiss = () => {
        history.push('/')
    }

    action = <React.Fragment>
                        <div className="ui primary button">Delete</div>
                        <div className="ui primary button">cancel</div>
                    </React.Fragment>

    render(){
        console.log(this.props)
        return (
            <div>
                StreamDelete
                <Modal title={'Delete Stream'} content={'Are you sure you want to delete the stream?'} action={this.action} onDismiss={this.onDismiss}/>
            </div>
        );
    }
}

export default StreamDelete;