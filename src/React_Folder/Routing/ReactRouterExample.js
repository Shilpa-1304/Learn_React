import React from "react";
import File1 from "./File1";
import File2 from "./File2";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
export default function ReactRouterExample() {
  return (
    <React.Fragment>
      <ul type="none">
        <li>
          <NavLink to="/file1">Click here for File1</NavLink>
        </li>
        <li>
          <NavLink to="/file2">Click here for File2</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/file1" element={<File1 />}></Route>
        <Route path="/file2" element={<File2 />}></Route>
      </Routes>
    </React.Fragment>
  );
}
