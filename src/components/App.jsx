import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />

        <ColorContext.Provider value="blue">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
