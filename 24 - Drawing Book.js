/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n = Number of pages in the book.
 *  2. INTEGER p = Page number to turn to.
 */

function pageCount(n, p) {
  let start = Math.floor(p / 2);
  let end = Math.floor((n / 2) - start);
  
  let count = Math.min(start, end);
  return count;
}

console.log(pageCount(7, 3));