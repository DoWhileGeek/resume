import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

import "../../styles/components/contact.scss";

export default ({ skills }) => {
  return (
    <div className="contact-container">
      <div className="contact-col">
        <div className="contact-cell">
          <a href="https://github.com/dowhilegeek" target="_blank">
            <span>
              <FontAwesomeIcon icon={faGithub} size="lg" color="#333" />{" "}
              /dowhilegeek
            </span>
          </a>
        </div>
        <div className="contact-cell">
          <a href="https://linkedin.com/in/joesephrodrigues" target="_blank">
            <span>
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="#0077b5" />{" "}
              /in/joesephrodrigues
            </span>
          </a>
        </div>
      </div>
      <div className="contact-col">
        <div className="contact-cell">
          <a href="https://twitter.com/dowhilegeek" target="_blank">
            <span>
              <FontAwesomeIcon icon={faTwitter} size="lg" color="#1da1f2" />{" "}
              /dowhilegeek
            </span>
          </a>
        </div>
        <div className="contact-cell">
          <a href="mailto:dowhilegeek@gmail.com" target="_blank">
            <span>
              <FontAwesomeIcon icon={faEnvelope} size="lg" color="#dd4b39" />{" "}
              dowhilegeek@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
