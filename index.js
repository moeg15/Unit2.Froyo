// give the user an input box to enter ice cream flavors
//break the ice cream flavors into an array divided on commas
//sort the list alphabetically 
//create a object
// itterate over sorted array until not equal to first element
//add count to object
//repeat steps 5/6 untill array is done
//return object

const input = prompt("enter ice cream flavors seperated by commas");
const howManyOfEachFlavor = (string) => {
  const myArray = string.split(",")
  myArray.sort();
  const counterobj = {};
  let elm = myArray[0];
  let counter = 1;
  counterobj[elm]= counter;
  for(let i = 0; i< myArray.length-1; i++){
    if(myArray[i]===myArray[i+1]){
      counter++;
      counterobj[elm]= counter;

    }else{
      counter = 1;
      elm = myArray[i+1]
      counterobj[elm] =counter;
    }
  }
  return counterobj;
}
console.log(howManyOfEachFlavor(input));


