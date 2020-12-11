import React from "react";

import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  signup(res) {
    sessionStorage.setItem("userData", JSON.stringify(res.profileObj));
    this.props.history.push('/')
  }
  render() {
    const responseGoogle = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);
    };
    return(
    <div className="App">
      <div className="row">
        <div className="col-sm-12 btn btn-info">
          Login
        </div>
      </div>

      <div className="row">
        <div style={{ paddingTop: "20px" }} className="col-sm-12">
          <div className="col-sm-4"></div>

          <div className="col-sm-4">
            <GoogleLogin
              clientId="682007759885-up4t94g08brmc84h34qnrsrcefb4vldo.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            ></GoogleLogin>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>)
  }
}
export default SignIn;
