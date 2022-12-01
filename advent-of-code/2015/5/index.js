const { readFileSync } = require("fs");
const { resolve } = require("path");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8");
const input = data.trim().split("\n").filter(Boolean);

function partOne() {
    let nice = 0;

    for (const line of input) {
        const vowels = line.match(/[aeiou]/g);
        const double = line.match(/(.)\1/g);
        const naughty = line.match(/ab|cd|pq|xy/g);

        if (vowels && vowels.length >= 3 && double && !naughty) {
            nice++;
        }
    }

    console.log("Part One:", nice);
}

function partTwo() {
    let nice = 0;

    for (const line of input) {
        let isTwice = false;
        let isRepeat = false;

        for (let i = 0; i < line.length; i++) {
            if (line[i] == line[i + 2]) {
                isRepeat = true;
            }

            if (line.substring(i + 2).includes(line.substring(i, i + 2))) {
                isTwice = true;
            }
        }

        if (isTwice && isRepeat) {
            nice++;
        }
    }

    console.log("Part Two:", nice);
}

partOne();
partTwo();
