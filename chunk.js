const chunkArray = (arr, len) => {
  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};
/*
console.log(chunkArray(["be","ak",2,3,3,4,5,6],2));
*/


module.exports = chunkArray;
