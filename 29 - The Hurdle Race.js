function hurdleRace(k, height) {
  let heightSort = height.sort((a, b) => a - b);
  console.log(heightSort);
  
  if(heightSort[heightSort.length -1] > k){
    return heightSort[heightSort.length -1] - k;
  } else {
   return 0; 
  }
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2])); // 2