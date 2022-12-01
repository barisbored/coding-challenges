const { readFileSync } = require("fs");
const { resolve } = require("path");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8");
const dimensions = data.split("\n").filter(Boolean).map(d => {
    const [l, w, h] = d.split("x").map(Number);
    return { l, w, h };
});

function partOne() {
    const total = dimensions.reduce((total, { l, w, h }) => {
        const sides = [l * w, w * h, h * l];
        const smallest = Math.min(...sides);
        const area = sides.reduce((area, side) => area + (2 * side), 0);
        return total + area + smallest;
    }, 0);

    console.log("Part One:", total);
}

function partTwo() {
    const total = dimensions.reduce((total, { l, w, h }) => {
        const sides = [l, w, h];
        const bow = sides.reduce((bow, side) => bow * side, 1);
        const sorted = sides.sort((a, b) => a - b);
        const wrap = sorted[0]*2 + sorted[1]*2;
        return total + bow + wrap;
    }, 0);

    console.log("Part Two:", total);
}


partOne();
partTwo();
