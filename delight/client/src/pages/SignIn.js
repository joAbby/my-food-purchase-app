import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GoogleLogin from "react-google-login";
import { setCurrentUser } from "../redux/user/UserActions";

import "./SignIn.scss";

const SignIn = ({ setCurrentUser }) => {
  const responseGoogle = (response) => {
    var userData = response.profileObj;
    setCurrentUser(userData);
  };

  return (
    <div className="signin__container">
      <div className="row">
        <div className="col-sm-12 btn btn-info">Login</div>
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
};

SignIn.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
