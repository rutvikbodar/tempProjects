import React from "react";
import { connect } from "react-redux";
import {fetchUser} from "./actions/index";

class UserHeader extends React.Component{

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    render(){
        if(this.props.user){ 
            return (
                <h3>user Header : {this.props.user.name}</h3>
            )
        }
        else{
            return null
        }
    }
}

const mapStateToProps = (state,ownProps) => {
    return {user : state.users.find((user)=>user.id===ownProps.userId)};
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);