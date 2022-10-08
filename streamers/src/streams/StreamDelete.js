import Modal from "./Modal";
import React from "react";
import history from '../history';
import { connect } from 'react-redux';
import {fetchStream,deleteStream} from '../actions'

class StreamDelete extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onDismiss = () => {
        history.push('/')
    }

    action = <React.Fragment>
                        <div className="ui primary button" onClick={() => this.props.deleteStream(this.props.match.params.id)}>Delete</div>
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

const mapStateToProps = (state) => {
    return state.stream;
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);