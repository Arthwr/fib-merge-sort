class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const doBfs = (graph, source) => {
  const bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null,
    };
  }

  bfsInfo[source].distance = 0;

  let queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    let root = queue.dequeue();

    for (let j = 0; j < graph[root].length; j++) {
      let child = graph[root][j];
      if (bfsInfo[child].distance === null) {
        bfsInfo[child].distance = bfsInfo[root].distance + 1;
        bfsInfo[child].predecessor = root;
        queue.enqueue(child);
      }
    }
  }

  return bfsInfo;
};

const adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  [],
];

const bfsInfo = doBfs(adjList, 3);

for (let i = 0; i < adjList.length; i++) {
  console.log(
    "vertex " +
      i +
      ": distance = " +
      bfsInfo[i].distance +
      ", predecessor = " +
      bfsInfo[i].predecessor
  );
}
