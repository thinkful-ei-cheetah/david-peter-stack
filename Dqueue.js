'use strict';
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class dQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(item) {
    const node = new _Node(item);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
      node.previous = this.last;
    }
    node.prev = this.last;
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first.next.previous = null;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(list) {
  console.log(list.first);
}

function display(list) {
  let currNode = list.first;
  let res = '';
  while (currNode !== null) {
    res += ` ${currNode.value}->`;
    currNode = currNode.next;
  }
  console.log(res);
  return res;
}

function main() {
  let dq = new dQueue();
  dq.enqueue('test1');
  dq.enqueue('spock goes here');
  dq.enqueue('Uhura');
  dq.enqueue('test3');
  dq.dequeue('');
  dq.dequeue('');
  display(dq);
}

main();