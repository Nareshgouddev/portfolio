import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/Nareshgouddev"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://leetcode.com/u/nareshgoudd/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode />
      </a>

      <a
        href="https://www.linkedin.com/in/naresh-goud-ediga-80b6a92b7/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://x.com/EDIGANARESHGOU4"
        className="home__social-link"
        target="__blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
