import React from "react";
import "./lessonCardStyles.css";
import { Link, useNavigate } from "react-router-dom";


const Index = ({ data }) => {

  const navigate = useNavigate();

  const nextLesson = (data) => {
    // console.log(data);
    let d = JSON.stringify(data)
    navigate(`/tutorial?data=${new Date().getTime()}`, { state: data });
  }
  return (
    <>
      {data &&
        data.map((d) => {
          return (
            // <Link to="/tutorial" params={{ data: d }} >
            <div className="lesson-card-background" key={d.id} onClick={() => nextLesson(d)}>
              <div className="lesson-card-container">
                <img src={d.image} className="lesson-card-img" />
                <div className="card-text">
                  <p className="card-text-1">{d.title.slice(0, 14) + "..."}</p>
                  <p className="card-text-2">{d.day}</p>
                  {/* <a href={d.url} className="card-text-3">Read more...</a> */}
                </div>
              </div>
            </div>
            // </Link>

          );
        })}
    </>
  );
};

export default Index;
