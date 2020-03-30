/*

Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

*/

var leastInterval = function(tasks, n) {
  let max = 0,
    count = 1;

  tasks.reduce((a, v) => {
    a[v] = (a[v] || 0) + 1;

    if (a[v] > max) {
      max = a[v];
      count = 1;
    } else if (a[v] === max) count++;

    return a;
  }, {});

  // MAX VAL - 1 SINCE ADDING TO END
  // COUNT INCLUDES THE MAX VAL ITSELF TO CREATE SUBSET TO REPEAT
  return Math.max(tasks.length, (max - 1) * (n + 1) + count);
};
