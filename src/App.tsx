import React from "react";
import "./App.css";
import "7.css/dist/7.css";
import list from "./list.json";

function App() {
  return (
    <div>
      <div className="window active">
        <div className="title-bar">
          <div className="title-bar-text">Windows 7 Applications</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body has-space">
          <p>Windows 7 was a great system, and still is! Sadly <a href="https://www.microsoft.com/en-US/windows/end-of-support">Microsoft to end support for Windows 7 on January 14, 2020</a>.</p>
          <p>Since then, applications have gradually been killed off on Windows 7. Here's a list of applications still running/rebuilt/extended kernels under this Windows.</p>
          <hr />
          <table>
            <tr>
              <th>Application name</th>
              <th>Latest version</th>
              <th>Details info</th>
              <th>Download</th>
            </tr>
            {list.map(application =>
              <tr>
                <th><a href={application.name_url}>{application.name}</a></th>
                <th><a href={application.version_url}>{application.version}</a></th>
                <th><a href={application.details_info}>{application.details_info}</a></th>
                <th><a href={application.download}>[DOWNLOAD]</a></th>
              </tr>
            )}
          </table>
          <div>
            <i>Last updated: 30 January 2024 11:18 PM (CET)</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
