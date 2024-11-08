"use strict";
{
    const number = {
        numbers: [1, 2, 3, 4, 5],
    };
    const sumArray = (numArr) => {
        var _a;
        let sum = 0;
        for (let i = 0; i < ((_a = numArr === null || numArr === void 0 ? void 0 : numArr.numbers) === null || _a === void 0 ? void 0 : _a.length); i++) {
            sum += numArr === null || numArr === void 0 ? void 0 : numArr.numbers[i];
        }
        return sum;
    };
    console.log("\n---------------- Solution of the Problem 01 ----------------\n");
    console.log(`The sum of the array [${number === null || number === void 0 ? void 0 : number.numbers}] is: ${sumArray(number)}`);
    // ------------------------------------------------------------------------------------------------------->
}
