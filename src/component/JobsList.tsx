import { useState } from "react";
import jobsDataArray from "../data/data.json";
import FilterBox from "./FilterBox";
import Job from "./Job";

export interface JobData {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface FilterItem {
  filterItems: string[];
}

const JobsList = () => {
  const [filterItems, setFilterItems] = useState<FilterItem>([] as FilterItem);

  const filteredJobsData = jobsDataArray.filter((job) => {
    return filterItems.every((value) => {
      return (
        job.role.includes(value) ||
        job.level.includes(value) ||
        job.languages.includes(value) ||
        job.tools.includes(value)
      );
    });
  });

  return (
    <div className="job-list">
      <div className="job-list__container">
        <FilterBox
          filterItems={filterItems}
          deleteFilterItem={(deletedFilter) =>
            setFilterItems(
              filterItems.filter((filter: string) => filter !== deletedFilter)
            )
          }
          clearFilterBox={() => setFilterItems([])}
        />
        <div>
          {filteredJobsData.map((job: JobData) => (
            <Job
              key={job.id}
              job={job}
              filterItems={(filter) => {
                if (!filterItems.includes(filter)) {
                  setFilterItems([...filterItems, filter]);
                }
              }}
              filterArray={filterItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsList;
