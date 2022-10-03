 const INITIAL_STATE =  {
    isSignedIn : null
 }
 
 const signInReducer = (state = INITIAL_STATE, action) => {
    if(action.type==='SIGN_IN'){
        return {...state,isSignedIn : true, userId : action.userId};
    }
    else if (action.type==='SIGN_OUT'){
        return {...state,isSignedIn : false, userId : null};
    }
    else{
        return state;
    }
}

export default signInReducer;