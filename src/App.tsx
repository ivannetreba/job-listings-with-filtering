import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import JobsList from "./component/JobsList";
import FilterBox from "./component/FilterBox";

export interface FilterItem {
  filter: string[];
}

function App() {
  const [filterItems, setFilterItems] = useState<FilterItem>([] as FilterItem);

  return (
    <div>
      <Header />
      <FilterBox filterItems={filterItems} />
      <JobsList
        filterItems={(filter) => setFilterItems([...filterItems, filter])}
      />
    </div>
  );
}

export default App;
