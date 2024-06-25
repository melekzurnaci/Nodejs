const _ = require("lodash");
const moment = require("moment");

const numbers = [3, 4, 5, 6, 1, 4, 2, 53, 4, 34, 3, 2, 23, 12];
const now = moment().format("YYYY-MM-DD");

const sortedNumbers = _.sortBy(numbers);

console.log(sortedNumbers);
console.log(now);
