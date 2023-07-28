export const analyzeArray = (arr) => {
  const length = arr.length;
  const average = length > 0 ? arr.reduce((a, b) => a + b, 0) / length : null;
  const min = Math.min(...arr) === Infinity ? null : Math.min(...arr);
  const max = Math.max(...arr) === -Infinity ? null : Math.max(...arr);
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
};
