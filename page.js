"use client";
import { useState } from "react";

export default function App() {
  const [home, setHome] = useState("");
  const [away, setAway] = useState("");
  const [line, setLine] = useState("");
  const [result, setResult] = useState(null);

  function calculate() {
    const h = parseFloat(home);
    const a = parseFloat(away);
    const l = parseFloat(line);

    if (!h || !a || !l) return;

    const expected = h + a;
    const diff = expected - l;

    let pick = "SKIP";

    if (diff > 0.7) pick = "OVER ✅";
    else if (diff < -0.7) pick = "UNDER ✅";

    setResult({
      expected: expected.toFixed(2),
      diff: diff.toFixed(2),
      pick,
    });
  }

  return (
    <div style={{ padding: 30, fontFamily: "Arial", color: "white", background: "#0f0f0f", minHeight: "100vh" }}>
      <h1>Value Scanner V2</h1>

      <input placeholder="Home avg" value={home} onChange={(e) => setHome(e.target.value)} />
      <br /><br />

      <input placeholder="Away avg" value={away} onChange={(e) => setAway(e.target.value)} />
      <br /><br />

      <input placeholder="Bookie line (e.g. 8.5)" value={line} onChange={(e) => setLine(e.target.value)} />
      <br /><br />

      <button onClick={calculate}>Calculate</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <p>Expected: {result.expected}</p>
          <p>Edge: {result.diff}</p>
          <h2>{result.pick}</h2>
        </div>
      )}
    </div>
  );
}
