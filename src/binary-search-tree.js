const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  setRoot(node) {
    this._root = node;
  }

  _addNode(node, data) {
    if (!node) return new Node(data);

    if (data < node.data) node.left = this._addNode(node.left, data);
    if (data > node.data) node.right = this._addNode(node.right, data);

    return node; // same data
  }

  add(data) {
    this.setRoot(this._addNode(this.root(), data));
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.root()) return null;

    // similar to linked list
    // go to the furthest to the left node - min value
    let current = this.root();
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.root()) return null;

    let current = this.root();
    // go to the furthest to the right node - max value
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

// let bst = new BinarySearchTree();
// bst.add(1);
// bst.add(2);
// bst.add(3);
module.exports = {
  BinarySearchTree,
};
