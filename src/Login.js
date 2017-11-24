/* global gapi */
import React, {Component} from "react";

export default class Login extends Component {

  componentDidMount() {
    this.renderGapi();
  }

  renderGapi() {
    gapi.signin2.render("g-signin2", {
      scope: "profile email",
      width: 240,
      height: 50,
      longtitle: true,
      theme: "dark",
      onsuccess: this.onSignIn.bind(this)
    });
  }
  onSignIn(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;
  }
  render() {
    return (
      <div>
        <div style={{textAlign: "center", paddingTop: 200}}>
          <div style={{display: "inline-block"}} id="g-signin2"></div>
        </div>
      </div>
    );
  }
}
