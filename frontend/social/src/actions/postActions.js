import axios from "axios";
import Cookies from "universal-cookie";

import {
  FETCH_POSTS,
  NEW_POST,
  FETCH_LATEST_POST,
  FETCH_USER_POSTS
} from "./types";

export const fetchPosts = () => dispatch => {
  axios.get("http://localhost:8000/posts/api/getPosts").then(posts => {
    dispatch({
      type: FETCH_POSTS,
      payload: posts.data
    });
  });
};

export const fetchSpecificUserPosts = userName => dispatch => {
  axios
    .get("http://localhost:8000/posts/api/getPosts?user=" + userName)
    .then(posts => {
      dispatch({
        type: FETCH_USER_POSTS,
        payload: posts.data
      });
    })
    .catch(err => {
      alert("Are you sure you've written the correct username ?");
    });
};

export const fetchLatestPost = () => dispatch => {
  axios
    .get("http://localhost:8000/posts/api/getPosts?latest=true")
    .then(post => {
      console.log(post);
      dispatch({
        type: FETCH_LATEST_POST,
        payload: post.data
      });
    });
};

export const addPost = postData => dispatch => {
  const cookies = new Cookies();
  const token = cookies.get("access");

  const authStr = "Bearer ".concat(token);
  console.log(authStr);
  const bodyParameters = {
    title: postData.title,
    body: postData.body
  };
  axios
    .post("http://localhost:8000/posts/api/addPost", bodyParameters, {
      headers: { Authorization: authStr }
    })
    .then(post => {
      console.log(post);
      dispatch({
        type: NEW_POST,
        payload: post.data
      });
    })
    .catch(err => {
      alert("Are you connected ?");
    });
};
