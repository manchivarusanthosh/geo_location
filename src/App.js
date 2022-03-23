import React from "react";
import "../App.css";
class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div className="header">Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div className="header">Latitude:{this.state.latitude}</div>;
    }

    return <div className="header">Loading....</div>;
  }
}

export default App;
