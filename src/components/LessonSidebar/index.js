import React from "react";
import "./lessonSidebarStyles.css";
import Pen from "../../images/pen.svg";
import CurvedRectangle from "../../images/curved-rectangle.svg";
import LightBulb from "../../images/light-bulb.svg";

const index = ({ setWeek }) => {
  return (
    <>
      <div className="lesson-sidebar-background">
        <div className="lesson-sidebar-heading">
          <img src={LightBulb} alt="light bulb" className="light-bulb" />
          <p>Learning Track</p>
        </div>
        <div className="curved-rectangle-container" onClick={(e) => setWeek(0)}>
          <img
            src={CurvedRectangle}
            className="curved-rectangle"
            alt="curved rectangle"
          />
          <p className="curved-rectangle-text"  >Track 01</p>
        </div>
        <div className="curved-rectangle-container" onClick={() => setWeek(1)}>
          <img
            src={CurvedRectangle}
            className="curved-rectangle"
            alt="curved rectangle"
          />
          <p className="curved-rectangle-text">Track 02</p>
        </div>
        <div className="curved-rectangle-container" onClick={() => setWeek(2)}>
          <img
            src={CurvedRectangle}
            className="curved-rectangle"
            alt="curved rectangle"
          />
          <p className="curved-rectangle-text">Track 03 </p>
        </div>
        <div className="curved-rectangle-container" onClick={() => setWeek(3)}>
          <img
            src={CurvedRectangle}
            className="curved-rectangle"
            alt="curved rectangle"
          />
          <p className="curved-rectangle-text">Track 04</p>
        </div>


        <div className="lesson-sidebar-heading">
          <img src={Pen} alt="pen" className="pen" />
          <p>Learning Track</p>
        </div>

        <div className="curved-rectangle-container">
          <img
            src={CurvedRectangle}
            className="curved-rectangle"
            alt="curved rectangle"
          />
          <p className="curved-rectangle-text">Assessment 01</p>
        </div>
        <div className="curved-rectangle-container">
          <img
            src={CurvedRectangle}
            className="curved-rectangle"
            alt="curved rectangle"
          />
          <p className="curved-rectangle-text">Assessment 02</p>
        </div>
        <div className="curved-rectangle-container">
          <img
            src={CurvedRectangle}
            className="curved-rectangle"
            alt="curved rectangle"
          />
          <p className="curved-rectangle-text">Assessment 03</p>
        </div>
        <div className="curved-rectangle-container">
          <img
            src={CurvedRectangle}
            className="curved-rectangle"
            alt="curved rectangle"
          />
          <p className="curved-rectangle-text">Assessment 04</p>
        </div>
      </div>
    </>
  );
};

export default index;
