import React from 'react';
import {connect} from 'react-redux';
import fetchPosts from './actions/index';

class PostList extends React.Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>Post List</div>
        )
    }
}

const getPropsFromState = (state) => {
    return state;
}

export default connect(getPropsFromState,{fetchPosts})(PostList);