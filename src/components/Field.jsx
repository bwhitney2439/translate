import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;
  state = {};
  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
