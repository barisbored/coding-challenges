const { readFileSync } = require("fs");
const { resolve } = require("path");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8");
const lines = data.split("\r").map(d => d.trim());

function partOne() {
    let elves = new Map();
    let i = 0;

    for (const line of lines) {
        if (line === "") {
            i++
            continue;
        } else {
            let data = elves.get(i) || 0;
            data += parseInt(line);
            elves.set(i, data);
        }
    }

    const biggest = Array.from(elves.values())
        .sort((a, b) => b - a)[0];
    
    console.log("Part One:", biggest)
}

function partTwo() {
    let elves = new Map();
    let i = 0;

    for (const line of lines) {
        if (line === "") {
            i++
            continue;
        } else {
            let data = elves.get(i) || 0;
            data += parseInt(line);
            elves.set(i, data);
        }
    }

    const sorted = Array.from(elves.values())
        .sort((a, b) => b - a);
    const total = sorted[0] + sorted[1] + sorted[2];
    
    console.log("Part Two:", total);
}

partOne();
partTwo();
