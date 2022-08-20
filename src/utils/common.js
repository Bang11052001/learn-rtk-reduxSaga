export const capitalizeString = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

export const getMarkColor = (mark) => {
  if (mark >= 8) return "green";
  if (mark >= 4) return "goldenrod";
  return "red";
};
