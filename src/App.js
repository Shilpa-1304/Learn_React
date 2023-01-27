import "./styles.css";
import FetchData from "./React_Folder/Fetching";
import ContextAPI from "./React_Folder/ContextAPI/ContextAPI";
import ToDo from "./React_Folder/ToDo";
import ReactRouterExample from "./React_Folder/Routing/ReactRouterExample";
import LandingPage from "./React_Folder/DisplayData/LandingPage";
import { BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";
export const BGContext = createContext();
export default function App() {
  const [color, setColor] = useState("black");
  const [textColor, settextColor] = useState("white");
  const changeBackground = () => {
    if (color === "black") {
      setColor("white");
      settextColor("black");
    } else {
      setColor("black");
      settextColor("white");
    }
  };
  return (
    <BGContext.Provider value={{ color, textColor }}>
      <BrowserRouter>
        <div
          className="App"
          style={{ height: "200px", backgroundColor: color, color: textColor }}
        >
          <button
            className="btn btn-dark"
            onClick={() => {
              changeBackground();
            }}
          >
            {color === "black" ? "Light" : "Dark"}
          </button>
          <br />
          <br />
          {/* <FetchData /> */}
          {/* <ContextAPI /> */}
          {/* <ToDo /> */}
          {/* <ReactRouterExample /> */}
          <LandingPage />
        </div>
      </BrowserRouter>
    </BGContext.Provider>
  );
}
