"use strict"


// приклад об'єкту

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
  };

  let newObject = {
  };
  
for (let key in priceData){
  newObject[key.toLowerCase()] = Number(priceData[key]).toFixed(2);
}


console.log(newObject)



// // 3 trial arrays


// let newArrayOfKeys = [];

// let arrayKeys = Object.keys(priceData);

// for (let i = 0; i < arrayKeys.length; i++){

// // newArrayOfKeys = arrayKeys[i].toLowerCase();
// console.log(arrayKeys[i].toLowerCase());
// // console.log(newArrayOfKeys)


// }
// console.log(newArrayOfKeys)

// console.log(arrayKeys[0])

// for (let key of arrayKeys){
// // let keys = key.toLowerCase()
// arrayKeys.unshift(key.toLowerCase());

//   // console.log(keys)
//   console.log(arrayKeys)


// }

// console.log(arrayKeys)

// // 1 trial direct
// for (let key in priceData){
//   // newObject.key = priceData.key;
//   newObject[key] = Number(priceData[key]).toFixed(2);
  
// console.log(priceData[key])

// }

// console.log(newObject)

// //2 version

// let array = Object.entries(priceData);
// let arrayNewValues = [];

// for (let item of array) {

// array[0] = item[0].toLowerCase();
// let values = Number(item[1]).toFixed(2);
// // keys = arrayNewValues[0];
// // console.log(arrayNewValues)
// console.log(array)
// }
// console.log(array)
// // console.log(arrayNewValues)