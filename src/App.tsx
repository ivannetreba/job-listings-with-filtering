import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import JobsList from "./component/JobsList";

function App() {
  return (
    <div>
      <Header />
      <JobsList />
    </div>
  );
}

export default App;
