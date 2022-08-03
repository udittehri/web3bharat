import React, { useEffect } from "react";
import "./tutorialStyles.css";
import Rectangle from "../../images/rectangle1.png";
import TutotialImg from "../../images/tutorial-image.svg";
import Dot from "../../images/dot.svg";
import Pin from "../../images/pin.svg";
import TweetRectangle from "../../images/tweet-rectangle.svg";
import { Link, useLocation } from 'react-router-dom'
const Index = () => {
  const { state } = useLocation();

  useEffect(() => {
    // const { id, color } = state;

    // console.log(state);
    console.log(state, "hgfghjk");
  }, [])
  return (
    <>
      <div className="tutorial-background">
        <img src={Rectangle} alt="Rectangle" className="rectangle" />
        <div className="tutorial-container">
          <div className="tutorial-header">
            <p className="tutorial-header-1"><Link to='/'>Web3Bharat Bootcamp /</Link> </p>
            <p className="tutorial-header-2"> Week 1 / {state.day} / {state.title}</p>
          </div>

          <img src={state.image} alt="TutorialImg" className="tutorial-img" />

          <div>

            {state.data.map((edx) => {
              return <div> <div className="tutorial-title">
                <img src={Dot} alt="Dot" className="dot" />
                <p > <a href={edx.link} target="_blank" className="no-a-tag">  {edx.name} </a></p>
              </div>
                <hr className="horizontal-rule" />
              </div>
            })}




            {/* <hr className="horizontal-rule" />
            <div className="tutorial-title">
              <img src={Dot} alt="Dot" className="dot" />
              <p>Why Web3 Matters?</p>
            </div>

            <div className="tutorial-title">
              <img src={Dot} alt="Dot" className="dot" />
              <p>
                Understanding Web3 as the Internet- Native Economy Web3: in a
                nutshell
              </p>
            </div> */}
          </div>
          <br />
          <div className="tweet-container">
            <div className="tweet-header">
              <p className="tweet-header-1">Tweet Once You </p>
              <p className="tweet-header-2">Are Done</p>
            </div>
            <div className="tweet-rectangle">
              <p className="tweet-header-3">About your Learning</p>
              <img src={Pin} alt="Pin" className="pin" />
            </div>
            <div className="tweet-rectangle">
              <p className="tweet-header-3">#web3bharatbootcamp</p>
              <img src={Pin} alt="Pin" className="pin" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
