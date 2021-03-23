import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("click", this.handleBackdropClick);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.addEventListener("click", this.handleBackdropClick);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={largeImageURL} alt="No alt images" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
