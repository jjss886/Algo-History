/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

*/

var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (x) {
  this.stack.push({
    val: x,
    min: !this.stack.length ? x : Math.min(x, this.getMin()),
  });
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};
