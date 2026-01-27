import React, { useMemo } from "react";
import "./Github.css";

const Github = ({ theme }) => {
  const contributionUrl = useMemo(() => {
    const accent = theme === "dark" ? "39d353" : "0e75b6";
    return `https://ghchart.rshah.org/${accent}/Nareshgouddev`;
  }, [theme]);

  return (
    <section className="github container section" id="github">
      <h2 className="section__title">GitHub Activity</h2>

      <div className="github__container">
        <div className="github__graph-wrapper">
          <img
            src={contributionUrl}
            alt="GitHub contribution graph for Nareshgouddev"
            loading="lazy"
            className="github__graph"
          />
        </div>

        <a
          href="https://github.com/Nareshgouddev"
          target="_blank"
          rel="noreferrer"
          className="btn github__button"
        >
          View Profile
        </a>
      </div>
    </section>
  );
};

export default Github;
