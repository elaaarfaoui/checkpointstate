import React, { Component } from "react";
import "./App.css";
import image from "./img.jpg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter:0,
      fullName: "Elaa Arfaoui",
      bio: " Software Engineer ",
      profession: " Full Stack Developper ",
      img: image,
      hidden: false,
    };
  }
  ShowHiddenElement() {
    this.setState({
      counter:0,
      hidden: !this.state.hidden,
    });
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
      // }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={image} className="card-img-top" alt="Elaa_Arfaoui" />
        <h6 className="conterStyle">{this.state.counter} second(s) </h6>        
          {this.state.hidden ? (
            <div className="HiddenDiv">
              <h2> {this.state.fullName}</h2>
              <h3>Bio : {this.state.bio} </h3>
              <h3>Profession : {this.state.profession} </h3>
            </div>
          ) : null}
          
          <div className="date-range">
  
            <input
              type="submit"
              value="Show"
              onClick={() => this.ShowHiddenElement()}
            />

          </div>
        </header>
      </div>
    );
  }
}

export default App;