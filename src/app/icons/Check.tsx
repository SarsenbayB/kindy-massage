import * as React from "react";
import { SVGProps } from "react";
const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={23}
    viewBox="0 0 32 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_348)">
      <path
        d="M30 2L10.75 21L2 12.3636"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_348">
        <rect width={32} height={23} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Check;
