import React from "react";

import GoogleLogin from "react-google-login";
import createHistory from "history/createBrowserHistory";
import { withRouter } from "react-router-dom";

import './SignIn.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  signup(res) {
    const history = createHistory();
    history.push("/");
  }
  render() {
    const responseGoogle = (response) => {
      var res = response.profileObj;
      this.signup(response);
    };
    return (
      <div className="signin__container">
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
      </div>
    );
  }
}
export default withRouter(SignIn);
