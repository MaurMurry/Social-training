import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/Header_container"
import DialogsContainer from "./components/Dialogs/Dialogs_Container";
import ProfileContainer from "./components/Home/Profile_container";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation.jsx";
import UsersContainer from "./components/Users/Users_Container";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navigation />
          <div className="wrapper-app-content">
            <Route
              path="/profile/:userID?"
              render={() => <ProfileContainer store={this.props.store} />}
            />
            <Route
              path="/dialogs"
              render={() => <DialogsContainer store={this.props.store} />}
            />

            <Route path="/users" render={() => <UsersContainer />} />

            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
