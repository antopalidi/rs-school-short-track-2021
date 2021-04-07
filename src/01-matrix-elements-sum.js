/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const len = matrix[0].length;
  const arr = matrix.flat();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && arr[i + len] !== undefined) {
      arr[i + len] = 0;
    }
  }
  return arr.reduce((acc, sum) => acc + sum, 0);
}

module.exports = getMatrixElementsSum;
