import { JobData } from "./JobsList";

interface Props {
  job: JobData;
}

const Job = ({ job }: Props) => {
  const jobClasses = job.new ? "job job__highlight" : "job";

  return (
    <article className={jobClasses}>
      <div className="job__logo-description">
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
            <div className="job__dot"></div>
            <span className="job__detail">{job.contract}</span>
            <div className="job__dot"></div>
            <span className="job__detail">{job.location}</span>
          </p>
        </div>
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
