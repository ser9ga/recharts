export type DataNode = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

export type DataValueKeys = Exclude<keyof DataNode, 'name'>

export type HEXColor = `#${string}`
