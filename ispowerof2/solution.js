function isPowerOf2(number1, number2, number3) {
    const array = [number1, number2, number3];

    /* write your code here */
    let result = [];

    for (var i = 0; i < array.length; i++) {
        result.push((Math.log(array[i]) / Math.log(2)) % 1 === 0);
    }
    return result;
}
