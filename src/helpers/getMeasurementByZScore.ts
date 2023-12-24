import {getStandardDeviationAndMeanForSample} from "./getStandardDeviationAndMeanForSample";

export const getMeasurementByZScore = (zScore: number, sample: number[]) => {
  const { standardDeviation, mean } =
    getStandardDeviationAndMeanForSample(sample);

  return zScore * standardDeviation + mean;
};
