const { readFileSync } = require("fs");
const { resolve } = require("path");
const { createHash } = require("crypto");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8");

function partOne() {
    let x = 0;
    let cont = true;

    while (cont) {
        const zeros = createHash("md5")
            .update(data.trim() + `${x}`)
            .digest("hex")
            .substring(0, 5);
        if (zeros == "0".repeat(5)) {
            cont = false;
        } else {
            x++;
        }
    }
    
    console.log("Part One:", x);
}

function partTwo() {
    let x = 0;
    let cont = true;

    while (cont) {
        const zeros = createHash("md5")
            .update(data.trim() + `${x}`)
            .digest("hex")
            .substring(0, 6);
        if (zeros == "0".repeat(6)) {
            cont = false;
        } else {
            x++;
        }
    }
    
    console.log("Part Two:", x);
}

partOne();
partTwo();
