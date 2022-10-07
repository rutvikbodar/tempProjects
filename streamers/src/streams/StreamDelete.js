import Modal from "./Modal";
import React from "react";
import history from '../history';

const StreamDelete = () => {

    const onDismiss = () => {
        history.push('/')
    }

    const action = <React.Fragment>
                        <div className="ui primary button">Delete</div>
                        <div className="ui primary button">cancel</div>
                    </React.Fragment>

    return (
        <div>
            StreamDelete
            <Modal title={'Delete Stream'} content={'Are you sure you want to delete the stream?'} action={action} onDismiss={onDismiss}/>
        </div>
    )
}

export default StreamDelete;