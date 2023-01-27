import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { BGContext } from "../../App";
export default function LandingPage() {
  const [data, setData] = useState([]);
  const { color, textColor } = useContext(BGContext);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.publicapis.org/entries");
      let arr = res.data.entries.slice(-30);
      setData([...arr]);
    };
    fetchData();
    // const debouncing = setTimeout(() => {

    // }, 1000);
    // return () => clearTimeout(debouncing);
  }, []);
  const handleNext = () => {
    console.log("Clicked..");
    if (index < 29) {
      let num = index;
      setIndex(num + 1);
    } else setIndex(0);
  };

  return (
    <React.Fragment>
      <div
        className="card"
        style={{
          color: textColor,
          backgroundColor: color
        }}
      >
        <div>
          {data.length > 0 ? (
            <div style={{ border: "4px double midnightblue" }}>
              <h3>{data[index].API}</h3>
              <pre>Description: {data[index].Description}</pre>
              <pre>Category: {data[index].Category}</pre>
              <button className="btn btn-primary" onClick={() => handleNext()}>
                Next
              </button>
            </div>
          ) : (
            <h2>Welcome to Weather information center</h2>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
