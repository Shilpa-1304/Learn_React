import { useState, useEffect } from "react";
export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const [note, setNote] = useState([]);
  const handleStopage = () => {
    setRunning(false);
    setNote([...note, time]);
  };
  useEffect(() => {
    console.log(note);
    let debouncing;
    if (running) {
      debouncing = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(debouncing);
    }
    return () => clearInterval(debouncing);
  }, [running]);
  return (
    <div>
      <h1>Timer</h1>
      <>{time}</>
      <br />
      <>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}</> :
      <>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}</> :
      <>{("0" + (Math.floor(time / 10) % 100)).slice(-2)}</> <br />
      <button className="btn btn-primary" onClick={() => setRunning(true)}>
        Start
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleStopage();
        }}
      >
        Stop
      </button>
      <button className="btn btn-primary" onClick={() => setTime(0)}>
        Reset
      </button>
      <br />
      {note.length > 0 &&
        note.map((stop) => (
          <div style={{ color: "white", backgroundColor: "black" }}>{stop}</div>
        ))}
    </div>
  );
}
