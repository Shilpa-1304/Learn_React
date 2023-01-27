import React, { useState, useEffect } from "react";
export default function ToDo() {
  const [list, setList] = useState(["Workout", "Yoga"]);
  const [add, setAdd] = useState("");
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    // e.submit.preventDefault();
    let item = { name: user, items: list };
    console.log(item);
    localStorage.setItem(user, JSON.stringify(item));
  };
  console.log(localStorage.getItem("items"));
  const handleAdd = () => {
    if (!list.includes(add)) {
      setList([...list, add]);
      console.log(list);
    }
  };
  const handleDel = (index) => {
    let arr = [...list];
    arr.splice(index, 1);
    setList([...arr]);
  };
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="User"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Add item"
        onChange={(e) => {
          setAdd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        Add
      </button>
      {list.length > 0 &&
        list.map((items, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {index + 0}
              <p style={{ display: "inline", margin: "10px" }}>
                {items.toLocaleUpperCase()}
              </p>
              <button
                onClick={() => {
                  handleDel(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      <button type="submit" onClick={() => handleSubmit()}>
        Submit
      </button>
    </React.Fragment>
  );
}
