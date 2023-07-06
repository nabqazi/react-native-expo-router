import * as React from "react";
import { Svg, Path, Rect } from "react-native-svg";
const SvgSearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <Rect
      width={39.5}
      height={38.5}
      x={0.75}
      y={0.75}
      fill="#fff"
      stroke="#AA8845"
      strokeWidth={0.5}
      rx={19.25}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m27.5 27.5-5-5m-10-4.167a5.835 5.835 0 0 0 9.958 4.125 5.832 5.832 0 1 0-9.958-4.125Z"
    />
  </Svg>
);
export default SvgSearchIcon;
