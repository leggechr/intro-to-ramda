// Use node v4.4.7 or higher
// Install ramda before running using the command `npm install ramda`
// Then run this file using the command `node --harmony examples.js`

var R = require('ramda');

// not functional / not pure version of increment
var a1 = 0;
function increment() {
  a1 += 1;
}
increment();
increment();
console.log(a1); // a1 has been changed

// function / pure version of increment
var a = 0;
function increment(a2) {
  return a2 + 1;
}
console.log(increment(a));
console.log(increment(a));
console.log(a); // a remains unchanged

var myObj = { id: 1, isOn: false };

// enable function using javascript (ES6)
function enable(obj) {
  return Object.assign({}, obj, {
    isOn: true
  });
}

// same enable function using Ramda
var ramdaEnable = R.assoc('isOn', true);

var newObj = enable(myObj);
var ramdaNewObj = ramdaEnable(myObj);
console.log(newObj);
console.log(ramdaNewObj);
console.log(myObj); // myObj remains unchanged

var originalState = {
  todos: [
    {
      text: 'learn ramda',
      complete: false
    },
    {
      text: 'learn functional programming',
      complete: false
    }
  ]
};

var myAction = {
  text: 'learn haskell'
};

// a redux reducer using javascript (ES6)
function addToDo(state, action) {
  var newTodo = { text: action.text, complete: false };
  var todos = [ ...state.todos, newTodo ];

  return Object.assign({}, state, {
    todos: todos
  });
}

// the same redux reducer using Ramda
function ramdaAddToDo(state, action) {
  var newTodo = { text: action.text, complete: false };
  var todos = R.append(newTodo, state.todos);
  return R.assoc('todos', todos, state);
}

var newState = addToDo(originalState, myAction);
var ramdaNewState = ramdaAddToDo(originalState, myAction);
console.log(newState);
console.log(ramdaNewState);
console.log(originalState); // original state remains unchanged
