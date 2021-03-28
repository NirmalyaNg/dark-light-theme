import React from "react";
import "./App.css";
import Stylesheet from "./Components/Stylesheet";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: false,
    };
  }

  handleDarkMode = () => {
    this.setState({
      dark: true,
    });
  };

  handleLightMode = () => {
    this.setState({
      dark: false,
    });
  };

  render() {
    const classname = this.state.dark ? "App dark" : "App light";
    const quote = this.state.dark
      ? '"Darkness is cheap, and Scrooge liked it."'
      : '"Nothing can dim the light that shines from within."';

    return (
      <div className={classname}>
        <div className="box">
          <h1>{quote}</h1>
          <Stylesheet
            dark={this.state.dark}
            handleDarkMode={this.handleDarkMode}
            handleLightMode={this.handleLightMode}
          />
        </div>
      </div>
    );
  }
}

export default App;
