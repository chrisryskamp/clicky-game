import React, { Component } from "react";
import NameCard from "./components/NameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import names from "./names.json";
import "./App.css";

class App extends Component {
  
  state = {
    names
  };

  removeName = () => {
    
    this.setState({ name });
  };

  
  render() {
    return (
      <Wrapper>
        <Title>Hockey Clicky-Game</Title>
        {this.state.names.map(name => (
          <NameCard
            removeName={this.removeName}
            id={name.id}
            key={name.id}
            name={name.name}
            image={name.image}
            occupation={name.occupation}
            location={name.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
