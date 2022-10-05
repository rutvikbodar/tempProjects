import stream from '../apis/stream';

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

export const createStream = (formValues) => {
    return async (dispatch) => {
        await stream.post('/streams',formValues);
    }
}