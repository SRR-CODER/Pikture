import React from "react";

import linkedin from "./linkedin-96.png";
import github from "./github-96.png";

function footer() {
  return (
    <div className="footer-outer">
      <div>
        <p> SRR-CODER</p>
      </div>
      <div className="links">
        <div>
          <a href="https://www.linkedin.com/in/srriiitk">
            <img src={linkedin} />
          </a>
        </div>
        <div>
          <a href="https://github.com/SRR-Coder">
            <img src={github} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default footer;
