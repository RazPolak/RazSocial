import axios from "axios";
import Cookies from "universal-cookie";

import { LOGIN, LOGOUT, SIGNUP } from "./types";
const cookies = new Cookies();

export const loginRequest = userData => dispatch => {
  const username = userData.username;
  const pw = userData.password;
  axios
    .post("http://localhost:8000/auth/api/token/", {
      username: username,
      password: pw
    })
    .then(res => {
      cookies.set("access", res.data.access, {
        maxAge: 7200
      });

      dispatch({
        type: LOGIN,
        payload: true
      });
    })
    .catch(err => {
      console.error(err);
    });
};

export const logoutRequest = () => dispatch => {
  cookies.remove("access");
  dispatch({
    type: LOGOUT,
    payload: false
  });
};

export const signupRequest = userData => dispatch => {
  const email = userData.email;
  const username = userData.username;
  const pw = userData.password;

  axios
    .post("http://localhost:8000/users/api/userCreate", {
      email: email,
      username: username,
      password: pw
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: SIGNUP,
        payload: true
      });
    })
    .catch(err => {
      console.log(err);
    });
};
