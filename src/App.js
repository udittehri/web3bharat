import { Route, Routes} from "react-router-dom";
import "./App.css";
import Enrollment from "./pages/Enrollment";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Tutorial from "./pages/Tutorial";
import LessonTrack from "./pages/LessonTrack";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/enrollment" element={<Enrollment />} />
        <Route exact path="/lesson-track" element={<LessonTrack />} />
        <Route exact path="/tutorial" element={<Tutorial />} />
      </Routes>
    </div>
  );
}

export default App;
