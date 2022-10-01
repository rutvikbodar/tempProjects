 import jsonPlaceHolder from '../apis/jsonPlaceHolder';
 
 const fetchPosts = () => async dispatch =>{
        const Results = await jsonPlaceHolder.get('/posts')
        dispatch({type : 'FETCH_POSTS', payload: Results})
    }
 
    export default fetchPosts;