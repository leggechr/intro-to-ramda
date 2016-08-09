// Use node v4.4.7 or higher 
// Install ramda before running using the command `npm install ramda`
var R = require('ramda');

var myList = [1, 2, 3, 4, 5]

function bewareOfMutatingVariables(options) {
  var moreOptions = _.extend(options, {addedProp: 'addedProp'});

  Service.doSomething(options); // BEWARE!! options is no longer what you think it is 😱
  Service.doSomethingElse(moreOptions);
}

// slice is a pure function, these next 3 lines will not mutate myList
myList.slice(0,3); // => [1, 2, 3]
myList.slice(0,3); // => [1, 2, 3]
myList.slice(0,3); // => [1, 2, 3]
console.log(myList);

// splice is NOT a pure function, these next 3 lines will mutate myList
myList.splice(0,3); // => [1, 2, 3]
myList.splice(0,3); // => [4, 5]
myList.splice(0,3); // => []
console.log(myList);

// simple add function
function add(a, b) {
  return a + b;
}
console.log(add(3));
console.log(add(3, 4));

// curried add function
function curriedAdd(a) {
  return function(b) {
    return a + b;
  }
}
var add3 = curriedAdd(3); // => returns a function that accepts the argument b
console.log(add3(4)); // => 7

// curried add function using Ramda
var ramdaAdd3 = R.add(3);
console.log(ramdaAdd3(4)); // => 7

var myObj = {
  id: 1,
  name: 'i_love_ramda',
  status: false
};

// return a new copy of an obj with an updated property
function toggleStatus(obj) {
  return Object.assign({}, obj, {
    status: true
  });
}
console.log(toggleStatus(myObj));

// the same function above with Ramda
var toggleStatus = R.assoc('status', true);
console.log(toggleStatus(myObj));

//the original object remains unchanged
console.log(myObj);
