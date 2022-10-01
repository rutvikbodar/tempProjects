 import jsonPlaceHolder from '../apis/jsonPlaceHolder';
 
 export default async function fetchPosts(){
    return function(dispatch,getState){
        const Results = jsonPlaceHolder.get('/users')
        return {
            type : 'FETCH_POST',
            payload : Results
        }
    }
 }