import { useState } from "react";
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
      <FilterBox
        filterItems={filterItems}
        deleteFilterItem={(deletedFilter) =>
          setFilterItems(
            filterItems.filter((filter: string) => filter !== deletedFilter)
          )
        }
        clearFilterBox={() => setFilterItems([])}
      />
      <JobsList
        filterItems={(filter) => setFilterItems([...filterItems, filter])}
        filterArray={filterItems}
      />
    </div>
  );
}

export default App;
