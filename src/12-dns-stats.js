/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dict = {};
  const data = domains.map((item) => item.split('.').reverse());
  data.forEach((arr) => {
    let key = '';
    arr.forEach((item) => {
      key += `.${item}`;
      if (key in dict) {
        dict[key]++;
      } else {
        dict[key] = 1;
      }
    });
  });
  return dict;
}

module.exports = getDNSStats;
