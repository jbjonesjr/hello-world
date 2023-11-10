# GitHub Branches Webapp

This is a webapp that displays the current state of branches in a GitHub repository.

It uses the GitHub API to pull a list of branches and environments for a specified repository and displays them in the webapp.

The webapp is built in React, and uses the GitHub Primer styles to provide a native look, similar to the branches table.

Each branch should list information such as related PR (and status), last commit date time, if it's deployed to an environment, and what target the environment matches. If the target is a cloud provider, it should provide the icon for the cloud provider.

The webapp should ask for a repository URL as an input field, and connect via a GitHub PAT, also inputted via an input field.

## How to run

To run the webapp locally, follow these steps:

- Clone this repository
- Run `npm install` to install the dependencies
- Run `npm start` to start the development server
- Open `http://localhost:9000` in your browser
- Enter a valid repository URL and a personal access token with the `repo` scope
- Click submit to see the branches table
