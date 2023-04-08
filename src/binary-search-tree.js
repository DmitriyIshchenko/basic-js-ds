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
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

// let bst = new BinarySearchTree();
// bst.add(1);
// bst.add(2);
// bst.add(3);
module.exports = {
  BinarySearchTree,
};
