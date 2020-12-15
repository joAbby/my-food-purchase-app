import React from "react";
import PropTypes from "prop-types";

import { Button } from "@react-md/button";
import { CloseSVGIcon } from "@react-md/material-icons";

import "./Popup.scss";

const Popup = ({ message, toggle }) => (
  <div className="popup">
    <div className="popup__Text">{message}</div>
    <Button
      className="popup__button"
      buttonType="icon"
      themeType="outline"
      theme="primary"
      aria-label="Close"
      onClick={toggle}
    >
      {" "}
      <CloseSVGIcon />
    </Button>
  </div>
);

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Popup;
