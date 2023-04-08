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

  _setRoot(node) {
    this._root = node;
  }

  _addNode(node, data) {
    if (!node) return new Node(data);

    if (data < node.data) node.left = this._addNode(node.left, data);
    if (data > node.data) node.right = this._addNode(node.right, data);

    return node; // same data
  }

  add(data) {
    this._setRoot(this._addNode(this.root(), data));
  }

  _searchNode(node, data) {
    if (!node) return false;

    if (data === node.data) return node;

    if (data < node.data) return this._searchNode(node.left, data);
    if (data > node.data) return this._searchNode(node.right, data);
  }

  has(data) {
    return Boolean(this._searchNode(this.root(), data));
  }

  find(data) {
    return this._searchNode(this.root(), data) || null;
  }

  _removeNode(node, data) {
    if (!node) return;

    // search for target node
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    }

    // when found

    // leaf case
    if (!node.left && !node.right) return null;

    // there is only right child
    if (!node.left) {
      node = node.right;
      return node;
    }

    // there is only left child
    if (!node.right) {
      node = node.left;
      return node;
    }

    // there are both children

    /* for the tree to be correct,
    we need to replace the value of the node to be deleted
    with the max value from the left branch
    or the min value from the right branch */

    let maxLeft = node.left;
    while (maxLeft.right) {
      maxLeft = maxLeft.right;
    }

    node.data = maxLeft.data; // copy max value to node
    node.left = this._removeNode(node.left, maxLeft.data); // delete original max node
    return node; // return updated node;
  }

  remove(data) {
    this._setRoot(this._removeNode(this.root(), data));
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

// console.log(bst.has(1));
// bst.remove(1);
// console.log(bst.has(1));

module.exports = {
  BinarySearchTree,
};
