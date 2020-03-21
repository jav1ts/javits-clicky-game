import React from 'react';
import './App.css';
import Image from "./components/Image"
import ryuPic from "./assets/images/ryu-3rd.jpg"
import akumaPic from "./assets/images/akuma-3rd.jpg"
import alexPic from "./assets/images/alex-3rd.jpg"
import chunnyPic from "./assets/images/chunny-3rd.jpg"
import dudleyPic from "./assets/images/dudley-3rd.jpg"
import elenaPic from "./assets/images/elena-3rd.jpg"
import gillPic from "./assets/images/gill-3rd.jpg"
import hugoPic from "./assets/images/hugo-3rd.jpg"
import ibukiPic from "./assets/images/ibuki-3rd.jpg"
import kenPic from "./assets/images/ken-3rd.jpg"
import makotoPic from "./assets/images/makoto-3rd.jpg"
import remyPic from "./assets/images/remy-3rd.jpg"
import seanPic from "./assets/images/sean-3rd.jpg"
import urienPic from "./assets/images/urien-3rd.jpg"
import yangPic from "./assets/images/yang-3rd.jpg"
import yunPic from "./assets/images/yun-3rd.jpg"

const picsArray = [ryuPic, akumaPic, alexPic, chunnyPic, dudleyPic, elenaPic, gillPic, hugoPic, ibukiPic, kenPic, makotoPic, remyPic, seanPic, urienPic, yangPic, yunPic];



class App extends React.Component {

  state = {
    score: 0,
    topScore: 0,
    clicked: {},
  }

  handleClick = event => {
    console.log(event)
    this.setState({clicked: {[event.target.id]: true}})
  }

  render() {
    const {score, topScore} = this.state;
    return (
      <div>
        <div className="ui top fixed borderless blue massive three item inverted menu">
          <a className="header active item" href="/">Javits' Clicky Game</a>
          <div className="item">Nice Guess!</div>
          <div className="item">Score: {score} || Top Score: {topScore}</div>
        </div>
        <div className="ui placeholder segment">
          <div className="ui icon header">
            Clicky Game!<br />
            Click on an image to earn points, but don't click on any more than once!
          </div>
        </div>
        <div className="ui container four cards">
          {picsArray.map((pic, index) => <Image  handleClick={this.handleClick} id={index} key={index} pic={pic} />)}
        </div>
        <div className="ui borderless blue massive one item inverted menu">
          <div className="item">
            We await your return, warrior.
          </div>
        </div>
      </div>
    );
  }

}

export default App;