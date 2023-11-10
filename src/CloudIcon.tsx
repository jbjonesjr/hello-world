import React from "react";

interface CloudIconProps {
  target: string;
}

const CloudIcon: React.FC<CloudIconProps> = ({ target }) => {
  switch (target) {
    case "aws":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cloud-fill"
          viewBox="0 0 16 16"
        >
          <path d="M13.405 4.527a3.5 3.5 0 0 0-4.786-3.18 4.5 4.5 0 0 0-8.763 2.563A2.5 2.5 0 0 0 3.5 11H13a2.5 2.5 0 0 0 .405-6.473z" />
        </svg>
      );
    case "azure":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cloud-sun-fill"
          viewBox="0 0 16 16"
        >
          <path d="M13.405 4.527a3.5 3.5 0 0 0-4.786-3.18 4.5 4.5 0 0 0-8.763 2.563A2.5 2.5 0 0 0 3.5 11H13a2.5 2.5 0 0 0 .405-6.473zM5.5 0a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm4.5 0a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm-4.354 2.354a.5.5 0 0 1 0 .708l-1.061 1.06a.5.5 0 1 1-.708-.708l1.06-1.061a.5.5 0 0 1 .708 0zm3.182 0a.5.5 0 0 1 .708 0l1.061 1.06a.5.5 0 1 1-.708.708l-1.06-1.061a.5.5 0 0 1 0-.708zM16 5.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 .5.5zm-3.646.354a.5.5 0 0 1-.708 0l-1.061-1.06a.5.5 0 1 1 .708-.708l1.06 1.061a.5.5 0 0 1 0 .708z" />
        </svg>
      );
    case "gcp":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cloud-lightning-fill"
          viewBox="0 0 16 16"
        >
          <path d="M13.405 4.527a3.5 3.5 0 0 0-4.786-3.18 4.5 4.5 0 0 0-8.763 2.563A2.5 2.5 0 0 0 3.5 11H13a2.5 2.5 0 0 0 .405-6.473z" />
          <path
            fillRule="evenodd"
            d="M7.646 8.146a.5.5 0 0 1 .708 0l1.646 1.647-2.5 4a.5.5 0 0 1-.894-.448l.708-2.826H5.5a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5v1.768l1.146-1.147z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default CloudIcon;
