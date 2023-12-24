import React from "react";
import {HEXColor} from "../types/types";

type ColorLineProps = {
  lineId: string;
  normalColor: HEXColor;
  bottomPercentForGraph: number;
  topPercentForGraph: number;
};

const ColorLine = ({
  lineId,
  normalColor,
  bottomPercentForGraph,
  topPercentForGraph,
}: ColorLineProps) => {
  return (
    <defs>
      <linearGradient id={lineId} x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }} />
        <stop
          offset={`${bottomPercentForGraph}%`}
          style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }}
        />
        <stop
          offset={`${bottomPercentForGraph}%`}
          style={{ stopColor: normalColor, stopOpacity: 1 }}
        />
        <stop
          offset={`${topPercentForGraph}%`}
          style={{ stopColor: normalColor, stopOpacity: 1 }}
        />
        <stop
          offset={`${topPercentForGraph}%`}
          style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
  );
};

export default ColorLine;
