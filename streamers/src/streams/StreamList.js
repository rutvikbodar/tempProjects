import React from "react";
import {connect} from 'react-redux';
import { fetchStreams } from "../actions";
import {Link} from 'react-router-dom';

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
    RenderAdmin(uid,stream){
        if(uid===this.props.signedIn.userId){
            return <div className="right floated content">
                <Link to={`/stream/edit/${stream.id}`} className="ui button primary">Edit</Link>
                <button className="ui button primary">Delete</button>
            </div>
        }
    }
    RenderStreamsList(){
        return Object.values(this.props.streams).map(stream => 
        <div className="item" key={stream.id}>
            <i className="large middle aligned icon camera"></i>
            <div className="title">{stream.title}</div>
            <div className="description">{stream.description}</div>
            {stream.userId?this.RenderAdmin(stream.userId,stream):<></>}
        </div>);
    }
    render(){
        return (
            <div>
                <div>Streams</div>
                <br />
                <div className="ui celled list">
                {this.RenderStreamsList()}
                </div>
                <div style={{textAlign : 'right'}}>
                    <Link className="ui button primary" to={'/stream/new'}>
                        Create Stream
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);