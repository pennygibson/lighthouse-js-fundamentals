function whichSchool (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age > 12 && age < 19){
    return "Secondary School" }
} else {
  return "Lighthouse Labs";
  }

console.log(whichSchool(35));
console.log(whichSchool(8));
console.log(whichSchool(14));

// console.log("I am " + age + ". Which school should I go to?");