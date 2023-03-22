/*function joinStrings(string1, string2){
  return string1.toString() + " " +  string2.toString();
}

console.log('ddk4', '123')*/


/*
function joinStrings(string1, string2){
  return `${string1.toString()} ${string2.toString()}`;
}

console.log('ddk4', '123')
*/

/*function repeatStr (n, s) {
  return s.repeat(n);
}

console.log(repeatStr(5, 'o'))*/


/*function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach(sheep => {
    if (sheep === true) {
      count++
    }
  })
  return count
}

console.log(countSheeps([true, true, true, false,
  true, null, undefined, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]))*/



function describeAge(age) {
return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}

console.log(describeAge(89))
