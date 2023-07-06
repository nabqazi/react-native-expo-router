import * as React from "react";
import { Svg, Path, Rect } from "react-native-svg";
const SvgNotificationIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={38}
    fill="none"
    {...props}
  >
    <Rect
      width={38.5}
      height={37.5}
      x={0.25}
      y={0.25}
      fill="#fff"
      stroke="#AA8845"
      strokeWidth={0.5}
      rx={18.75}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M22.5 24v.625a2.5 2.5 0 0 1-5 0V24m9.206-1.272c-1.003-1.228-1.711-1.853-1.711-5.238 0-3.1-1.583-4.204-2.886-4.74a.696.696 0 0 1-.388-.412c-.229-.778-.87-1.463-1.721-1.463-.852 0-1.493.685-1.719 1.464a.69.69 0 0 1-.388.411c-1.305.537-2.886 1.637-2.886 4.74-.002 3.385-.71 4.01-1.713 5.238-.416.508-.052 1.272.675 1.272h12.066c.723 0 1.084-.766.671-1.272Z"
    />
  </Svg>
);
export default SvgNotificationIcon;
