import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';
 
export const fetchPosts = () => async dispatch =>{
        const Results = await jsonPlaceHolder.get('/posts')
        dispatch({type : 'FETCH_POSTS', payload: Results})
    }

export const fetchUser = id => dispatch =>_fetchUser(id,dispatch);

const _fetchUser =_.memoize(async(id, dispatch)=>{
    const Results = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({type : "FETCH_USER",  payload : Results})
})