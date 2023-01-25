function Adj(n, paths) {
    const graph = Array(n);
paths.forEach(([u, v]) => {
  u -= 1;
  v -= 1;
  graph[u] = graph[u] || [];
  graph[v] = graph[v] || [];
  graph[u].push(v);
  graph[v].push(u);
});
const result = Array(n).fill(1);
graph.forEach((out, u) => {
  result[u] = [1,2,3,4].find(num => {
    return out.every(v => result[v] !== num);
  });
});
return result;
  
};
let n = 3, paths = [[1,2],[2,3],[3,1]]
console.log(Adj(n,path))