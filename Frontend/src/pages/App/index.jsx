import { Outlet, Link } from "react-router-dom";
import "./App.module.css";

function App() {
  return (
    <div>
      <h1>Unit Converter</h1>
      <nav>
        <Link to={"/length"}>Length</Link>
        <Link to={"/temperature"}>Temperature</Link>
        <Link to={"/weight"}>Weight</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
