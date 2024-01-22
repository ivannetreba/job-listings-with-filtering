import { JobData } from "./JobsList";

interface Props {
  job: JobData;
}

const Job = ({ job }: Props) => {
  return <div>{job.company}</div>;
};

export default Job;
