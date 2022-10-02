import React from "react";
import { connect } from "react-redux";
import {fetchUser} from "./actions/index";

class UserHeader extends React.Component{

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    render(){
        const user = this.props.users.find((user)=>user.id===this.props.userId);
        if(user){ 
            return (
                <h3>user Header : {user.name}</h3>
            )
        }
        else{
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);