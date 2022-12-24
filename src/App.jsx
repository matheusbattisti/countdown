import useCountdown from "./hooks/useCountdown";

import NewYear from "./assets/newyear.jpg";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2023 00:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
