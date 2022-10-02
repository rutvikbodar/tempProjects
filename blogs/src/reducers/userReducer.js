const userReducer =  (state = [],action) => {
    switch(action.type){
        case "FETCH_USER":
            return [...state , action.payload.data];
        default:
            return state;
    }
}

export default userReducer;