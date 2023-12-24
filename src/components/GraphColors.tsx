import React from "react";
import {Line} from "recharts";
import ColorLine from "./ColorLine";
import {getParameterValues} from "../helpers/getParemeterValues";
import {getPercentsForGraph} from "../helpers/getPercentsForGraph";
import {DataNode, DataValueKeys, HEXColor} from "../types/types";
import renderNode from "./renderNode";
import {getZScoreByMeasurement} from "../helpers/getZScoreByMeasurement";

type LineChunkProps = {
  id: DataValueKeys;
  data: DataNode[];
  normalColor: HEXColor;
  activeDotRadius?: number
};

const GraphLine = ({
  id,
  data,
  normalColor,
  activeDotRadius
}: LineChunkProps) => {
  const sample = getParameterValues(data, id);
  const colorLineParams = getPercentsForGraph({ sample });
  const lineId = `${id}Line`;

  const getColor = (value: number) => {
    const zScore= getZScoreByMeasurement(value, sample)

    return zScore < -1 || zScore > 1
      ? '#FF0000'
      : normalColor
  }

  return (
    <>
      <Line
        type="monotone"
        dataKey={id}
        stroke={`url(#${lineId})`}
        activeDot={(node: any) => renderNode({
          key: node.value,
          cx: node.cx,
          cy: node.cy,
          ...(activeDotRadius && {radius: activeDotRadius}),
          color: getColor(node.value),
          filled: true
        })}
        dot={(node) => renderNode({
          key: node.value,
          cx: node.cx,
          cy: node.cy,
          color: getColor(node.value)
        })}
      />
      <defs>
        <ColorLine
          lineId={lineId}
          normalColor={normalColor}
          {...colorLineParams}
        />
      </defs>
    </>
  );
};

export default GraphLine
