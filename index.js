const addDays = require("date-fns/addDays");

const getDateAfterDays = (Days) => {
  const result = addDays(new Date(2020, 7, 22), Days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};
console.log(getDateAfterDays(10));

module.exports = getDateAfterDays;
