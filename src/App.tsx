import React, { useState } from "react";
import GitHub from "github-api";
import BranchesTable from "./BranchesTable";

const App: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [pat, setPat] = useState("");
  const [branches, setBranches] = useState<any[]>([]);
  const [error, setError] = useState("");

  const handleRepoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoUrl(e.target.value);
  };

  const handlePatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPat(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setBranches([]);
    try {
      const gh = new GitHub({ token: pat });
      const repo = gh.getRepo(repoUrl);
      const branchesData = await repo.listBranches();
      setBranches(branchesData.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-lg">
      <h1 className="h1">GitHub Branches Webapp</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="repoUrl">Repository URL</label>
          <input
            type="text"
            className="form-control"
            id="repoUrl"
            placeholder="Enter repository URL"
            value={repoUrl}
            onChange={handleRepoUrlChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pat">Personal Access Token</label>
          <input
            type="password"
            className="form-control"
            id="pat"
            placeholder="Enter personal access token"
            value={pat}
            onChange={handlePatChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {error && <div className="flash flash-error">{error}</div>}
      {branches.length > 0 && <BranchesTable branches={branches} />}
    </div>
  );
};

export default App;
