const { readFileSync } = require("fs");
const { resolve } = require("path");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8");

function partOne() {
    let x = 0;
    let y = 0;
    let points = new Map();

    points.set(`${x},${y}`, 1);

    for (let i = 0; i < data.length; i++) {
        switch (data[i]) {
            case "^":
                y++;
                break;
            case "v":
                y--;
                break;
            case ">":
                x++;
                break;
            case "<":
                x--;
                break;
        }

        let key = `${x},${y}`;
        let value = points.get(key) || 0;

        points.set(key, value + 1);
    }

    console.log("Part One:", points.size);
}

function partTwo() {
    let santa_x = 0;
    let santa_y = 0;
    let robo_x = 0;
    let robo_y = 0;
    let points = new Map();

    points.set(`${santa_x},${santa_y}`, 2);

    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
            switch (data[i]) {
                case "^":
                    santa_y++;
                    break;
                case "v":
                    santa_y--;
                    break;
                case ">":
                    santa_x++;
                    break;
                case "<":
                    santa_x--;
                    break;
            }

            let key = `${santa_x},${santa_y}`;
            let value = points.get(key) || 0;

            points.set(key, value + 1);
        } else {
            switch (data[i]) {
                case "^":
                    robo_y++;
                    break;
                case "v":
                    robo_y--;
                    break;
                case ">":
                    robo_x++;
                    break;
                case "<":
                    robo_x--;
                    break;
            }

            let key = `${robo_x},${robo_y}`;
            let value = points.get(key) || 0;

            points.set(key, value + 1);
        }

    }

    console.log("Part Two:", points.size);
}



partOne();
partTwo();
