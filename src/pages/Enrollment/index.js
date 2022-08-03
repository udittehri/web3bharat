import "./enrollmentStyles.css";
import Rectangle from "../../images/rectangle1.png";
import Key from "../../images/key.svg";
import Rocket from "../../images/rocket.svg";
import { Link } from "react-router-dom";

const Enrollment = () => {
  return (
    <>
      <div className="enrollment-background">
        <img src={Rectangle} alt="Rectangle" className="rectangle" />
        <div className="enrollment-header">
          <h1 className="enrollment-header-1">Here is </h1>
          <h1 className="enrollment-header-2">
            Web3 Bharat Bootcamp
          </h1>
        </div>
        <div className="enrollment-container">
          <div className="enrollment-card">
            <a href="https://discord.gg/H5KGPREEPj">
              <button className="enrollment-button"  >Discord Key</button></a>
            <img src={Key} alt="Rectangle" className="key" />
          </div>
          <div className="enrollment-card">

            <Link to="/profile">
              <button className="enrollment-button">Enroll</button>
            </Link>

            <img src={Rocket} alt="Rectangle" className="rocket" />
          </div>
        </div>
        <p className="copyright">© All Rights Reserved 2022</p>
      </div>
    </>
  );
};

export default Enrollment;
