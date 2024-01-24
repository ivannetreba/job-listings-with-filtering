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
}

const JobsList = ({ filterItems }: Props) => {
  return (
    <div className="job-list">
      {jobsDataArray.map((job: JobData) => (
        <Job key={job.id} job={job} filterItems={filterItems} />
      ))}
    </div>
  );
};

export default JobsList;
