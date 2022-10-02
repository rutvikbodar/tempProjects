import jsonPlaceHolder from '../apis/jsonPlaceHolder';
 
export const fetchPosts = () => async dispatch =>{
        const Results = await jsonPlaceHolder.get('/posts')
        dispatch({type : 'FETCH_POSTS', payload: Results})
    }

export const fetchUser = (id) => async dispatch =>{
    const Results = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({type : "FETCH_USER",  payload : Results})
}