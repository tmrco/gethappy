import React, { Component } from "react";
import BtnPrimary from "../BtnPrimary/BtnPrimary";

class FacebookLogin extends Component {
  constructor(props) {
    super(props);

    this.url = "/index.php?p=actions/social/login-accounts/login&provider=facebook";
  }
  

  render() {
    const { className } = this.props;
    return (
        <a style={{ textDecoration: 'none' }} className={className} href={this.url}>
            <BtnPrimary className="btn-primary--vibrant-blue">Sign in via facebook</BtnPrimary>
        </a>
    );
  }
}

export default FacebookLogin;