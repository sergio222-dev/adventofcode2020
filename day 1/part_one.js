import {ReadInput} from "../utils/utils.js";

const TOTAL_SUM = 2020;

const inputs = ReadInput("day 1");
const stInputs = [...inputs];

console.time('bench time');

inputs.forEach((value, index) => {
    const iRest = TOTAL_SUM - parseInt(value);
    stInputs.shift();
    const arCoincidence = stInputs.filter(s => s === iRest.toString());
    if (arCoincidence.length !== 0 ) {
        const sCoincidence = arCoincidence[0];
        const result = parseInt(value) * parseInt(sCoincidence);
        console.log(`Values are ${value} and ${sCoincidence}`)
        console.log(`Result is ${result}`);
    }
});

console.timeEnd('bench time');