import {FETCH_POSTS,CREATE_POSTS} from '../actions/types';

export const fetchposts = () => dispatch => {   
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    });
}

export const createpost = getdata  => dispatch => {
    console.log("newpost");
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(getdata)
            }).then(response => response.json())
            .then(data => {
                dispatch({
                    type: CREATE_POSTS,
                    payload: data
                })
               
            });
}