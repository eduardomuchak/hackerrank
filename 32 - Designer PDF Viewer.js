function designerPdfViewer(h, word) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let max = 0;
  for (let i = 0; i < word.length; i += 1) {
    const index = alphabet.indexOf(word[i]);
    if (h[index] > max) {
      max = h[index];
    }
  }
  return max * word.length;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5], 'abc'));
