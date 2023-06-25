export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}
/* it converts a number with more than 2 decimal places to number with exactly 2 decimal place */
