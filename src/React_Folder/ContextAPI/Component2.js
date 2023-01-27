import { useContext, useEffect } from "react";
import { UserContext } from "./ContextAPI";
export default function Component2() {
  const { user, setUser } = useContext(UserContext);
  const getValue = (e) => {
    let { name, value } = e.target;
    let data = { [name]: value };
    setUser({ ...user, ...data });
  };

  useEffect(() => {
    const debouncing = setTimeout(() => {
      console.log(user);
    }, 2000);
    return () => {
      clearTimeout(debouncing);
    };
  }, [user]);

  return (
    <div>
      <input name="Name" placeholder="Name" onChange={getValue} />
      <input name="Age" placeholder="Age" onChange={getValue} />
      <h1> {user.Name ? user.Name : "Coder"}</h1>
    </div>
  );
}
