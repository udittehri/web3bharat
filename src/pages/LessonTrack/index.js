import React, { useEffect, useState } from "react";
import LessonCard from "../../components/LessonCard/";
import "./lessonTrackStyles.css";
import LessonSidebar from "../../components/LessonSidebar";
import lessonData from "./lessonData";

const Index = () => {
  const [week, setWeek] = useState(1)
  const [lessons, setLessons] = useState(lessonData[0])

  useEffect(() => {
    // alert(week)
    setLessons(lessonData[week])
  }, [week])



  return (
    <>
      <div className="lesson-track-background">
        <LessonSidebar setWeek={setWeek} />
        <div>
          <h1 className="tutorial-heading">Tutorials</h1>
        </div>

        <div className="lesson-tracks-container">

          <LessonCard data={lessons} />
        </div>
      </div>
    </>
  );
};

export default Index;
