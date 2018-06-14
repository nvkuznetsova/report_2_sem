const gc = require('goss_concat');

//from https://kodaktor.ru/j/goss_compose
const compose = (...funcs) => funcs.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));
const s  = 'abc';

const up = x => String.prototype.toUpperCase.call(x);
const rv = x => Array.prototype.reverse.call(x);
const sp = x => String.prototype.split.call(x, '');
const rp = x => String.prototype.repeat.call(x, 2);
const ps = x => String.prototype.padStart.call(x, 10, '*');

console.log(gc(...rv(sp(rp(ps(up(s)))))));
console.log(gc(...compose(rv, sp, rp, ps, up)(s)));
