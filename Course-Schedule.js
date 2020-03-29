/*

There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

*/

var canFinish = function(num, pre) {
  const goMap = [],
    inMap = [];

  pre.forEach(pair => {
    goMap[pair[0]] = (goMap[pair[0]] || 0) + 1;
    inMap[pair[1]] = (inMap[pair[1]] || 0) + 1;
  });

  while (pre.length > 0) {
    let removed = false;
    const len = pre.length;

    for (let i = 0; i < len; i++) {
      const [main, preq] = pre.shift();

      if (!inMap[main]) {
        // INMAP DOES NOT HAVE MAIN COURSE
        goMap[main]--;
        inMap[preq]--;
        removed = true;
      } else pre.push([main, preq]);
    }

    if (!removed) break;
  }

  return pre.length === 0;
};
