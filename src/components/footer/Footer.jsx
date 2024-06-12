import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.light}>
        <svg
          width="1450"
          height="430"
          viewBox="0 0 1450 430"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.15" filter="url(#filter0_f_2134_369)">
            <ellipse cx="725" cy="475" rx="375" ry="125" fill="#FFE000" />
          </g>
          <defs>
            <filter
              id="filter0_f_2134_369"
              x="0"
              y="0"
              width="1450"
              height="950"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="175"
                result="effect1_foregroundBlur_2134_369"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={classes.links}>
        <div>
          <a
            href="https://discord.gg/blastone"
            target="_blank"
            className={classes.link}
          >
            <span>Discord</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_2389_1377"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="4"
                y="5"
                width="11"
                height="11"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 5H14.1667C14.6269 5 15 5.3731 15 5.83333V15H13.3333V7.84518L5.83333 15.3452L4.65482 14.1667L12.1548 6.66667H5V5Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_2389_1377)">
                <rect width="20" height="20" fill="white" fill-opacity="0.4" />
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/BlastOne_io"
            target="_blank"
            className={classes.link}
          >
            <span>Twitter</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_2389_1377"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="4"
                y="5"
                width="11"
                height="11"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 5H14.1667C14.6269 5 15 5.3731 15 5.83333V15H13.3333V7.84518L5.83333 15.3452L4.65482 14.1667L12.1548 6.66667H5V5Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_2389_1377)">
                <rect width="20" height="20" fill="white" fill-opacity="0.4" />
              </g>
            </svg>
          </a>
        </div>
        <div>
          <span>© 2024 All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
