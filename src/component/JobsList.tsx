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

const JobsList = () => {
  const [filterItems, setFilterItems] = useState<string[]>([]);

  const filteredJobsData = jobsDataArray.filter((job: JobData) => {
    return filterItems.every((filterItem) => {
      return (
        job.role === filterItem ||
        job.level === filterItem ||
        job.languages.includes(filterItem) ||
        job.tools.includes(filterItem)
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
              filterItems.filter((filter) => filter !== deletedFilter)
            )
          }
          clearFilterBox={() => setFilterItems([])}
        />
        <div>
          {filteredJobsData.map((job: JobData) => (
            <Job
              key={job.id}
              job={job}
              filterItems={(filter: string) => {
                if (!filterItems.includes(filter)) {
                  setFilterItems([...filterItems, filter]);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsList;
