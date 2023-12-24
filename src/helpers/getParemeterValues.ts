import {DataNode} from "../types/types";

export const getParameterValues = <T extends DataNode[], K extends keyof DataNode>(data: T, parameterName: K) => {
  return data.map((dataNode) => dataNode[parameterName]);
};
