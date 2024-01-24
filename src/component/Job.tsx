import { JobData } from "./JobsList";

interface Props {
  job: JobData;
}

const Job = ({ job }: Props) => {
  return (
    <article className="job">
      <img className="job__logo" src={job.logo} alt={job.company} />
      <div className="job__description-box">
        <p className="job__company-line">
          <span className="job__company">{job.company}</span>
          {job.new && (
            <span className="job__status job__status--cyan">NEW!</span>
          )}
          {job.new && (
            <span className="job__status job__status--black">FEATURED</span>
          )}
        </p>
        <p className="job__position">{job.position}</p>
        <p className="job__details-box">
          <span className="job__detail">{job.postedAt}</span>
          <span className="job__detail">{job.contract}</span>
          <span className="job__detail">{job.location}</span>
        </p>
      </div>
      <div className="job__requirements-box">
        <span className="job__requirement">{job.role}</span>
        <span className="job__requirement">{job.level}</span>
        {job.tools.map((tool) => (
          <span className="job__requirement">{tool}</span>
        ))}
        {job.languages.map((language) => (
          <span className="job__requirement">{language}</span>
        ))}
      </div>
    </article>
  );
};

export default Job;
