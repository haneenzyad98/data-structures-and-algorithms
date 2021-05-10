let reverseArray = (arr) => {
    let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
     el= arr[arr.length - i - 1];
     newArray.push(el);
}
 return newArray;
 console.log(newArray);
   }

reverseArray([1, 2, 3,4,5]);