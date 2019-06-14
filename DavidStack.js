'use strict';
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


// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));



function isBalanced(s) {
  let newStack = new Stack;
  let openParen = null;
  let closedParen = null;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openParen = i;
    }
    if (s[i] === ')') {
      closedParen = i;
    }
    if (s[i] === ')' && openParen === null) {
      console.log('you need to add an opening parenthesis');
      return i;
    }
    if (s[i] === ')' && openParen !== null) {
      openParen = null;
      closedParen = null;
      // return;
    }
    while (s[i] === '(' && closedParen === null) {
      if (s[i] === ')') {
        closedParen === i;
        return i;
        // console.log('you need to add a closing parenthesis');
      }
      else {
        i++;
      }
    }
    newStack.push(s[i]);
  }
  console.log('balanced');
}

console.log(isBalanced('abc(asdf)(asd(flk)j'));