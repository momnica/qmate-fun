import { useState } from "react";

export default function CodePage() {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{
      backgroundColor: "#000",
      color: "#00ff00",
      fontFamily: "Courier New",
      padding: "20px",
      minHeight: "100vh"
    }}>
      <h1>*** WELCOME TO THE CYBER ZONE ***</h1>

      <p>{"> INITIALIZING MODEM..."}</p>
      <p>{"> KRRRRRRR... BZZZZT..."}</p>

      <p>⚠ WARNING ⚠</p>
      <p>This website is powered by pure chaos and 56k technology.</p>

      <br />

      <p>VISITORS: 00000001337</p>

      <button onClick={() => setClicked(true)}>
        CONTINUA
      </button>

      {clicked && (
        <p>HAHAHAHA 😈 Serve la prossima maglietta!</p>
      )}
    </div>
  );
}
