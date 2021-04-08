/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((arrX, i) => arrX.map((el, k) => {
    if (el) return 1;
    let res = 0;

    let top = 0;
    if (i !== 0) top = matrix[i - 1][k] ? 1 : 0;

    let right = 0;
    if (k + 1 !== matrix[i].length) right = matrix[i][k + 1] ? 1 : 0;

    let bottom = 0;
    if (i + 1 !== matrix.length) bottom = matrix[i + 1][k] ? 1 : 0;

    let left = 0;
    if (k !== 0) left = matrix[i][k - 1] ? 1 : 0;

    let topLeft = 0;
    if (i !== 0 && k !== 0) topLeft = matrix[i - 1][k - 1] ? 1 : 0;

    let bottomLeft = 0;
    if (i + 1 !== matrix.length && k !== 0) {
      bottomLeft = matrix[i + 1][k - 1] ? 1 : 0;
    }

    let topRight = 0;
    if (i !== 0 && k + 1 !== matrix[i].length) {
      topRight = matrix[i - 1][k + 1] ? 1 : 0;
    }

    let bottomRight = 0;
    if (i + 1 !== matrix.length && k + 1 !== matrix[i].length) {
      bottomRight = matrix[i + 1][k + 1] ? 1 : 0;
    }

    res = top + right + bottom + left + topLeft + topRight + bottomLeft + bottomRight;
    return res;
  }));
}

module.exports = minesweeper;
