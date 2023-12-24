import { getMeasurementByZScore } from "./getMeasurementByZScore";

type getPercentsForGraphParams = {
  sample: number[]
}

export const getPercentsForGraph = ({ sample }: getPercentsForGraphParams) => {
  const maxValue = Math.max(...sample);
  const minValue = Math.min(...sample);
  const rangeCapacity = maxValue - minValue
  const normalRangeBottom = getMeasurementByZScore(-1, sample);
  const normalRangeTop = getMeasurementByZScore(1, sample);
  const bottomPercentOfCapacity =
    ((normalRangeBottom - minValue) / rangeCapacity) * 100;
  const topPercentOfCapacity = ((normalRangeTop - minValue) / rangeCapacity) * 100;
  const bottomPercentForGraph = 100 - topPercentOfCapacity;
  const topPercentForGraph = 100 - bottomPercentOfCapacity;

  return {
    bottomPercentForGraph,
    topPercentForGraph,
  };
};
