import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
  className="pink_shadow"
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.33}
      d="M5 20h30M5 10h30M5 30h20"
    />
    <defs>
      <linearGradient
        id="a"
        x1={20}
        x2={20}
        y1={10}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC067" />
        <stop offset={1} stopColor="#99733E" />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
