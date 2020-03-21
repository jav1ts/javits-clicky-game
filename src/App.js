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

function App() {
  return (
    <div>
      <div class="ui top fixed borderless blue massive three item inverted menu">
        <a class="header active item" href="/">Javits' Clicky Game</a>
        <div class="item">Nice Guess!</div>
        <div class="item">Score: 0 || Top Score: 0</div>
      </div>
      <div class="ui placeholder segment">
        <div class="ui icon header">
          Clicky Game!<br />
          Click on an image to earn points, but don't click on any more than once!
        </div>
      </div>
      <div class="ui container four cards">
        {picsArray.map( pic => <Image pic={pic}/>)}
      </div>
      <div class="ui borderless blue massive one item inverted menu">
        <div class="item">
          We await your return, warrior.
        </div>
      </div>
    </div>
  );
}

export default App;