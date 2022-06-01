function utopianTree(n) {
  let cycle = 1;
  let height = 1;

  for (let index = 0; index < n; index += 1) {
    if(cycle % 2 !== 0 ){
      height *= 2;
    }else{
      height += 1;
    }
    cycle += 1;
  }
  
  return height;
}

console.log(utopianTree(4));