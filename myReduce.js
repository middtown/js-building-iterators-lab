// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue ) {
  

  
  for ( i = 0; i < arr.length; i++) {
    callback (arr[i], i, arr);
  
}

//   var newItem = 0;
//   var i = 0;
//   if ( newItem === undefined) {
//   	i = 0;
//   	i++;
//   	} else {
//   		i = initialValue;
//   	}
// for (; i < arr.length; i++) {
// 	 newItem = callback (arr[i] + i, arr); 
// 	}
return myReduce;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/



// export this function (you can ignore this for now)
module.exports = myReduce;

