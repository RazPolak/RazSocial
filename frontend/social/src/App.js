import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store";

import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import MyNavBar from "./Components/MyNavBar";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import UserProfile from "./Components/UserProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} render={() => <this.homePage />} />
        <Route path="/login" exact={true} render={() => <this.loginPage />} />
        <Route path="/signup" exact={true} render={() => <this.signupPage />} />
        <Route path="/user/:username" render={() => <this.userProfile />} />
      </Router>
    );
  }

  homePage = () => {
    return (
      <Provider store={store}>
        <div className="App" />
        <MyNavBar />
        <PostForm />
        <Posts />
        <div />
      </Provider>
    );
  };

  loginPage = () => {
    return (
      <Provider store={store}>
        <div className="App" />
        <MyNavBar />
        <LoginForm />
        <div />
      </Provider>
    );
  };

  signupPage = () => {
    return (
      <Provider store={store}>
        <div className="App" />
        <MyNavBar />
        <SignupForm />
        <div />
      </Provider>
    );
  };

  userProfile = () => {
    return (
      <Provider store={store}>
        <div className="App" />
        <MyNavBar />
        <UserProfile />
        <Posts />
        <div />
      </Provider>
    );
  };
}

export default App;
