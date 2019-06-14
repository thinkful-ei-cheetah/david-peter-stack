class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(item){
        if(this.top === null){
            this.top = new _Node(item, null);
        }
        this.top = new _node(item, this.top)
    }
    pop(item){
        if(this.top === null){

        }
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}