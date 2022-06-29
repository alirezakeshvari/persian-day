const convertDayNumber = require("./ConvertDayNumber");
const convertDayName = require("./ConvertDayName");

const today = () => {
  return convertDayNumber(new Date().getDay());
};

module.exports = { convertDayNumber, convertDayName, today };
