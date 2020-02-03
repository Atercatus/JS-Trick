class Node {
  constructor(value) {
    this.next = null; // 후
    this.value = value;
  }
}

function node(value) {
  return new Node(value);
}

const NodeList = {
  head: null,
  tail: null,

  add(value) {
    const n = node(value);
    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }
  }
};

console.log(NodeList.head);
console.log(NodeList.tail);
NodeList.add(3);
console.log(NodeList.head);
console.log(NodeList.tail);
NodeList.add(4);
console.log(NodeList.head);
console.log(NodeList.tail);
