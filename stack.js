/* eslint-disable indent */
/* eslint-disable strict */


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
    push(item) {
        if (this.top === null) {
            this.top = new _Node(item, null);
        }
        this.top = new _Node(item, this.top);
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    peek() {
        console.log(this.top.data);
    }
    isEmpty() {
        return (this.head === null) ? true : false;
    }
    display() {
        let currNode = this.top;
        let res = '';
        while (currNode.next !== null) {
            res += `${currNode.data} -> `;
            currNode = currNode.next;
        }
        console.log(res);
        return res;
    }
}

function main() {
    let st = new Stack();

    st.push('test1');
    st.push('test2');
    st.push('test3');
    st.display();
    st.peek();
}
main();

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (stack.pop() !== s[i]) {
            return false;
        }
    }
    return true;
}

function isBalance(s) {
    s = s.toLowerCase().replace(/[^()]/g, '');
    let count = 0;
    let stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        stack.push(s[s.length-i-1]);
    }
    console.log(stack.display());
    for (let i = 0; i < s.length; i++) {
        if (stack.pop() === '(') {
            count++;
            // console.log(count)
        }
        else {
            count--;
            // console.log(count)
            if (count < 0) {
                return false;
            }
        }
    }
    // console.log(count)
    if (count !== 0) {
        return false;
    }
    else {
        return true;
    }
}

console.log(isBalance('test()'));

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

module.exports = Stack;