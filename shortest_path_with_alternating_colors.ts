/*
You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

You are given two arrays redEdges and blueEdges where:

    redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
    blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.

Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.

 

Example 1:

Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
Output: [0,1,-1]

Example 2:

Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
Output: [0,1,-1]
*/

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
let shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    let buildGraph = (edges) => {
        let graph = {};
        for (let [a,b] of edges) {
            if (a in graph) {
                graph[a].push(b);
            } else {
                graph[a] = [b];
            }
        }
        return graph;
    }

    // blue: 0, red: 1
    let graph = {
        0: buildGraph(blueEdges),
        1: buildGraph(redEdges)
    };

    let bfs = () => {
        // stores [n, color]
        // blue = 0, red = 1
        let queue = [];
        let res = new Array(n).fill(-1);
        let visited = new Set();
        let steps = 0;
        // initialize queue and visited
        queue.push([0,0]);
        visited.add('0-0');
        queue.push([0,1]);
        visited.add('0-1');

        while (queue.length) {
            let currLen = queue.length;
            let nextQueue = [];
            for (let i = 0; i < currLen; i++) {
                let [node, color] = queue[i];
                // if we have reached the first time, update steps
                if (res[node] === -1) res[node] = steps;
                if (!graph[color][node]) continue;

                for (let neighbor of graph[color][node]) {
                    let key = `${neighbor}-${color}`;
                    if (!visited.has(key)) {
                        visited.add(key);
                        // push neighbor and inverse color
                        nextQueue.push([neighbor, color ^ 1]);
                    }
                }
            }
            queue = nextQueue;
            steps++; // move on to the next level
        }
        return res;
    }

    return bfs();
};

console.log(shortestAlternatingPaths(3, [[0,1],[1,2]], []));
console.log('-----')
console.log(shortestAlternatingPaths(3, [[0, 1]], [[2, 1]]));   