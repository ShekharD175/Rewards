import { MEN, RANDOM_BASE_URL, WOMEN } from "./constants";

export function getRandomImgURL() {
    const randomInt = getRandomInteger();
    const subStr = (randomInt % 2 == 0) ? MEN : WOMEN;
    const imgUrl = RANDOM_BASE_URL + subStr + "/" + randomInt + ".jpg";
    return imgUrl;
}

// used for generating random number between 1 to 80
export function getRandomInteger() {
    return Math.floor(Math.random() * (80 - 1 + 1)) + 1;
}

export function getTimeStampValue() {
    const dataArr = [
        "Feb 1, 2021",
        "4 hrs ago",
        "Yesterday"
    ]
    return dataArr[(getRandomInteger()%3)];
}