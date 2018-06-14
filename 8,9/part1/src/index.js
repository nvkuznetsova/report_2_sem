const goss_concat = require('goss_concat');

const length = 10;
const arr = Array.from({ length }, (v, i) => ++i).map(() => '⭐');
console.log(goss_concat(...arr));
