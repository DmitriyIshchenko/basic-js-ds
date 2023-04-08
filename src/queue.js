const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node; // edge case: empty queue
    } else {
      this.tail.next = node; // link node to the queue
    }
    this.tail = node; // move tail to the new node in any case
  }

  dequeue() {
    let { value } = this.head;
    this.head = this.head.next;

    return value;
  }
}

module.exports = {
  Queue,
};
