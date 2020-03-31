/*

Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

*/

var allPathsSourceTarget = function(graph) {
  const res = [];

  function dfs(arr, idx) {
    if (idx === graph.length - 1) res.push(arr);

    for (const x of graph[idx]) {
      dfs([...arr, x], x);
    }
  }

  dfs([0], 0);
  return res;
};
