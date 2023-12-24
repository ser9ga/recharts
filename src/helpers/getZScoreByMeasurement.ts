import {getStandardDeviationAndMeanForSample} from "./getStandardDeviationAndMeanForSample";

export const getZScoreByMeasurement = (measurement: number, sample: number[]) => {
  const {standardDeviation, mean } =
    getStandardDeviationAndMeanForSample(sample);

  return (measurement - mean) / standardDeviation;
};
