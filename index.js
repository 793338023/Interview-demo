var a = new Number(1);
var b = new Number(1);

a.valueOf = function () {
  return 2;
};

console.log(a + b);

function add(a, b) {
  return a + b;
}
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

var addCurry = curry(add);

console.log(addCurry(1)(2));
console.log(addCurry(1, 2));
