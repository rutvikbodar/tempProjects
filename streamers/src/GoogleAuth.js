import React from "react";

class GoogleAuth extends React.Component{
    state = {isSignedIn : null}

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId : '554276549468-fl1b6ao0hi23mgabukmm425fbqv5am8m.apps.googleusercontent.com',
                scope : 'email',
                plugin_name : 'streamy'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn : this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () =>{
        this.setState({isSignedIn : this.auth.isSignedIn.get()});
    }

    onSignButton = () => {
        if(this.state.isSignedIn){
            this.auth.signOut();
        }
        else{
            this.auth.signIn();
        }
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null
        }
        else if(this.state.isSignedIn){
            return <button className="ui red google button" onClick={this.onSignButton}>
                <i className="google icon"></i>
                Sign out
            </button>
        }
        else{
            return <button className="ui red google button" onClick={this.onSignButton}>
            <i className="google icon"></i>
            Sign In
        </button>
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;