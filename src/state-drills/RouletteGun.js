import React, { Component } from "react";

export default class RouletteGun extends Component {
  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  defaultprops = {
    bulletInChamber: 8,
  };

  pullTrigger = () => {
    console.log("trigger pulled");
    this.setState({ spinningTheChamber: true });
    let timeout = setTimeout(() => {
      const randomNumber = Math.ceil(Math.random() * 8);
      console.log(randomNumber);
      this.setState({
        chamber: randomNumber,
        spinningTheChamber: false,
      });
    }, 2000);
  };

  renderMessage() {
    if (this.state.spinningTheChamber) {
      return "spinning the chamber and pulling the trigger! ...";
    } else if (this.state.chamber === this.props.bulletInChamber) {
      return "BANG!!!";
    } else {
      return "you're safe!!";
    }
  }

  render() {
    return (
      <div className="RouletteGun">
        <p>{this.renderMessage()}</p>
        <button onClick={this.pullTrigger}>Pull the trigger</button>
      </div>
    );
  }
}
