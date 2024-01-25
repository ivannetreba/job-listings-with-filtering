import { FilterItem } from "../App";
import jobsDataArray from "../data/data.json";
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

interface Props {
  filterItems: (filter: string) => void;
  filterArray: FilterItem;
}

const JobsList = ({ filterItems, filterArray }: Props) => {
  const filteredJobsData = jobsDataArray.filter((job) => {
    return filterArray.every((value) => {
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
      {filteredJobsData.map((job: JobData) => (
        <Job key={job.id} job={job} filterItems={filterItems} />
      ))}
    </div>
  );
};

export default JobsList;
