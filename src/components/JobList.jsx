import React from "react";

function JobList({ jobs }) {
  return (
    <div>
      <ul>
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <div className="company">
              <a href={job.logoLink} target="_blank">
                <img className="logo" src={job.logo} alt="logo" />
              </a>
              <h2 className="company-name">
                <a href={job.logoLink} target="_blank">{job.companyName}</a>
              </h2>
            </div>
            <div className="job-details">
              <h3 className="title">{job.jobTitle}</h3>
              <p className="description">{job.jobDescription}</p>
              <p>{job.typeOfEmployment}</p>
              <p>{job.date}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
