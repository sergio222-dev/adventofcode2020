import {ReadInput} from "../utils/utils.js";
import {FindOneToSum} from './common.js';

const TOTAL_SUM = 2020;

const inputs = ReadInput("day 1");

console.time('bench time');
console.log(FindOneToSum(TOTAL_SUM, 0, inputs))
console.timeEnd('bench time');