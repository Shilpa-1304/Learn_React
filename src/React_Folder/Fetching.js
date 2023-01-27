import axios from "axios";
import "../styles.css";
import { useEffect, useState } from "react";
export default function Fetching() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let api = "https://jsonplaceholder.typicode.com/users/" + search;
    console.log(api);
    const debouncing = setTimeout(() => {
      const fetchData = async () => {
        const res = await axios.get(api);
        console.log(res.data);
        setUsers([res.data]);
      };
      fetchData();
    }, 2000);

    return () => clearTimeout(debouncing);
  }, [search]);
  const handleClick = () => {
    const data = users.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    console.log(data);

    setUsers([...data]);
  };
  return (
    <div className="app">
      <button className="btn btn-primary" onClick={() => handleClick()}>
        Ascending
      </button>
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search here..."
      />
      {users.map((ele, index) => (
        <div className="card" key={ele.id}>
          <div className="card-inner border border-primary">
            <div className="card-text">{ele.name}</div>
            <div className="card-text">{ele.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
