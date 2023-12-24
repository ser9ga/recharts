import React from "react";
import {HEXColor} from "../types/types";

type renderNodeParams = {
  key: React.Key
  cx: number
  cy: number
  radius?: number
  color: HEXColor
  filled?: boolean
}
const renderNode = ({
  key,
  cx,
  cy,
  radius = 3,
  color,
  filled = false
}: renderNodeParams) => {
  return (
    <circle
      key={key}
      cx={cx}
      cy={cy}
      r={radius}
      strokeWidth="1"
      stroke={color}
      fill={filled ? color : '#FFFFFF'}
    />
  )
}

export default renderNode
