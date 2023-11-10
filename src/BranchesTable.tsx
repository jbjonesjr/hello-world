import React from "react";
import GitHub from "github-api";
import CloudIcon from "./CloudIcon";

interface Branch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
}

interface BranchesTableProps {
  branches: Branch[];
}

const BranchesTable: React.FC<BranchesTableProps> = ({ branches }) => {
  const gh = new GitHub();
  const getPR = async (branch: Branch) => {
    const repo = gh.getRepo(branch.commit.url.split("/")[4], branch.commit.url.split("/")[5]);
    const prs = await repo.listPullRequests({ head: branch.name });
    return prs.data[0];
  };

  const getCommitDate = async (branch: Branch) => {
    const repo = gh.getRepo(branch.commit.url.split("/")[4], branch.commit.url.split("/")[5]);
    const commit = await repo.getCommit(branch.commit.sha);
    return commit.data.commit.author.date;
  };

  const getEnvironment = (branch: Branch) => {
    // mock function to return a random environment for demo purposes
    const environments = [
      { name: "dev", target: "aws" },
      { name: "test", target: "azure" },
      { name: "prod", target: "gcp" },
      { name: "none", target: "none" },
    ];
    return environments[Math.floor(Math.random() * environments.length)];
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Branch</th>
          <th scope="col">PR</th>
          <th scope="col">Last commit</th>
          <th scope="col">Environment</th>
        </tr>
      </thead>
      <tbody>
        {branches.map((branch) => (
          <tr key={branch.name}>
            <td>{branch.name}</td>
            <td>
              {getPR(branch).then((pr) => {
                if (pr) {
                  return (
                    <a href={pr.html_url} target="_blank" rel="noreferrer">
                      #{pr.number} ({pr.state})
                    </a>
                  );
                } else {
                  return "None";
                }
              })}
            </td>
            <td>
              {getCommitDate(branch).then((date) => {
                return new Date(date).toLocaleString();
              })}
            </td>
            <td>
              {getEnvironment(branch).then((env) => {
                if (env.name !== "none") {
                  return (
                    <>
                      {env.name} <CloudIcon target={env.target} />
                    </>
                  );
                } else {
                  return "None";
                }
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BranchesTable;
