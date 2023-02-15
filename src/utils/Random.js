const { NUMBER } = require("../constants");

const Random = {
  generateRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < NUMBER.COUNT) {
      this.generateRandomNumber(randomNumbers);
    }
    return randomNumbers;
  },

  generateRandomNumber(randomNumbers) {
    const number =
      Math.floor(Math.random() * (NUMBER.MAX_RANGE - NUMBER.MIN_RANGE + 1)) +
      NUMBER.MIN_RANGE;
    if (!this.isDuplicated(randomNumbers, number)) {
      randomNumbers.push(number);
    }
  },

  isDuplicated(numbers, number) {
    return numbers.includes(number);
  },
};

module.exports = Random;
