export const getStandardDeviationAndMeanForSample = (sample: number[]) => {
  const sampleLength = sample.length;
  const sampleSum = sample.reduce((acc, current) => acc + current, 0);
  const mean = sampleSum / sampleLength;
  const sampleDeviations = sample.map((current) => current - mean);
  const squaredSampleDeviations = sampleDeviations.map(
    (current) => current ** 2
  );
  const squaredSampleDeviationsSum = squaredSampleDeviations.reduce(
    (acc, current) => acc + current,
    0
  );
  const variance = squaredSampleDeviationsSum / (sampleLength - 1);
  const standardDeviation = Math.sqrt(variance);

  return { standardDeviation, mean };
};
