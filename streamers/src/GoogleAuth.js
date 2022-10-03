import React from "react";
import {signIn , signOut} from './actions/index';
import {connect} from 'react-redux';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId : '554276549468-fl1b6ao0hi23mgabukmm425fbqv5am8m.apps.googleusercontent.com',
                scope : 'email',
                plugin_name : 'streamy'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }

    onSignInClick = async() => {
        await this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.signedIn.isSignedIn === null){
            return null
        }
        else if(this.props.signedIn.isSignedIn){
            return <button className="ui red google button" onClick={this.onSignOutClick}>
                <i className="google icon"></i>
                Sign out
            </button>
        }
        else{
            return <button className="ui red google button" onClick={this.onSignInClick}>
            <i className="google icon"></i>
            Sign In
        </button>
        }
    }

    render(){
        console.log(this.props);
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);