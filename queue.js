/* eslint-disable strict */
/* eslint-disable indent */
class _Node {
    constructor(value, ) {
        this.value=value;
        this.next=null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(item){
        const node = new _Node(item);
        if(this.first === null){
            this.first = node
        }
        if(this.last){
            this.last.next = node
        }
        this.last = node
    }
    dequeue(){
          //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
         //if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

function peek(list){
    console.log(list.first)
}
function isEmpty(list) {
    return (list.first !== null) ? false : true

}
function display(list){
    let currNode = list.first;
    let res = ""
    while (currNode !== null){
        res += ` ${currNode.value}->`
        currNode = currNode.next
    }
    console.log(res)
    return res
}

function main() {
    let q = new Queue();
    q.enqueue('test1')
    q.enqueue('test2')
    q.enqueue('test3')
    q.enqueue('test4')
   console.log(display(q))
}

main();