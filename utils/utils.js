import fs from 'fs';
import * as path from 'path';
/**
 *
 * @param dir string
 * @constructor
 * @return string[]
 */
export function ReadInput(sDayName) {
    const sPath = path.join(process.cwd(), sDayName, 'input.txt');

    let buf = fs.readFileSync(sPath);

    const arLines = [];

    buf.toString().split(/\n/).forEach(function(line){
        arLines.push(line);
    });

    return arLines;
}