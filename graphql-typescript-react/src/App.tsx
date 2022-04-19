import "./App.css";
import Launches from "./components/Launches/Launches";
import Launch from "./components/Launch/Launch";
import { useState } from "react";

function App() {
  const [launchId, setLaunchId] = useState("42");

  const onLaunchClick = (launchIdToSet: number) =>
    setLaunchId(String(launchIdToSet));

  return (
    <div className="App">
      <Launches onLaunchClick={onLaunchClick} />
      <Launch launchId={launchId} />
    </div>
  );
}

export default App;
