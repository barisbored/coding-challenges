const { readFileSync } = require("fs");
const { resolve } = require("path");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8");

function partOne() {
    let floor = 0;

    for (let i = 0; i < data.length; i++) {
        const char = data[i];
        if (char === "(") {
            floor++;
        }
        if (char === ")") {
            floor--;
        }
    }

    console.log("Part One:", floor);
}

function partTwo() {
    let floor = 0;
    let position = 0;

    for (let i = 0; i < data.length; i++) {
        const char = data[i];
        if (char === "(") {
            floor++;
        }
        if (char === ")") {
            floor--;
        }
        if (floor === -1) {
            position = i + 1;
            break;
        }
    }

    console.log("Part Two:", position);
}

partOne();
partTwo();
