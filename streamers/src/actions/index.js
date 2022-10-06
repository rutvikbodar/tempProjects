import stream from '../apis/stream';
import history from '../history';

export const signIn = (userId) => {
    return {
        type : 'SIGN_IN',
        userId : userId
    }
} 

export const signOut = () => {
    return {
        type : 'SIGN_OUT',
        userId : null
    }
}

export const createStream = formValues => {
    return async (dispatch,getState) => {
        const userId = getState().signedIn.userId;
        const response = await stream.post('/streams',{...formValues,userId});
        dispatch({type : 'CREATE_STREAM', payload : response.data});
        history.push('/');
    }
}

export const fetchStreams = () => async dispatch =>{
    const response = await stream.get('/streams');
    dispatch({type : 'FETCH_STREAMS', payload : response.data});
}

export const fetchStream = (id) => async dispatch => {
    const response = await stream.get(`/streams/${id}`);
    dispatch({type : 'FETCH_STREAM' , payload : response.data})
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await stream.put(`/streams/${id}`, formValues);
    dispatch({type : 'EDIT_STREAM', payload : response.data});
}

export const deleteStream = (id) => async dispatch => {
    await stream.delete(`/stream/${id}`);
    dispatch({type : 'DELETE_STREAM', payload : id})
}