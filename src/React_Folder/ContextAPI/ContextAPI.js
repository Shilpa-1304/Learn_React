import { createContext, useState } from "react";
import Component1 from "./Component1";
export const UserContext = createContext();
export default function ContextAPI() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* <h1>{user}</h1> */}
      <Component1 />
    </UserContext.Provider>
  );
}
