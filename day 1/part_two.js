import { FindOneToSum } from './common.js';
import {ReadInput} from "../utils/utils.js";

const inputs = ReadInput("day 1");

console.time('bench time');
console.log(FindOneToSum(2020, 1, inputs));
console.timeEnd('bench time')