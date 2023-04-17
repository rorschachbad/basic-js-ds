const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

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

  add(data) {
    if (this._root) {
      let isAdded = false;
      let current = this._root;
      while (!isAdded) {
        if (current.data < data) {
          if (!current.right) {
            current.right = {
              data,
              left: null,
              right: null
            }
            isAdded = true;
          } else {
            current = current.right;
          }
        } else {
          if (!current.left) {
            current.left = {
              data,
              left: null,
              right: null
            }
            isAdded = true;
          } else {
            current = current.left;
          }
        }
      }
        
    } else {
      this._root = {
        data,
        left: null,
        right: null
      }
    }
  }
// has(data)— возвращает true, 
// если узел с таким dataсуществует в дереве и false в противном случае
  has(data) {
    if (!this._root) {
      return false;
    }
      let current = this._root;
        while (current) {
          if (current.data > data) {
            current = current.left;
          } else if (current.data < data) {
            current = current.right;
          } else if (current.data === data) {
            return true;
          }           
        }
        return false;
  }

// возвращает узел с узлом data if с существующим в дереве и в противном случае data null

  find(data) {
    let current = this._root;
      while (current) {
        if (current.data > data) {
          current = current.left;
        } else if (current.data < data) {
          current = current.right;
        } else if (current.data === data) {
          return current;         
        }
      }
      return null;
  }

  addRemovedNodes(parentNode) {
    if (parentNode) {
      this.add(parentNode.data);
      if (parentNode.left) {
        this.addRemovedNodes(parentNode.left);
      } 
      if (parentNode.right) {
        this.addRemovedNodes(parentNode.right);
      }
    }
  } 

  remove(data) {
    let current = this._root;
    let parentNode = current;
      while (current) {
        if (current.data > data) {
          parentNode = current;
          current = current.left;
        } else if (current.data < data) {
          parentNode = current;
          current = current.right;
        } else if (current.data === data) {
          if (parentNode?.left?.data === data) {
            parentNode.left = null;
            this.addRemovedNodes(current?.left);
            this.addRemovedNodes(current?.right);
          } else if (parentNode?.right?.data === data) {
            parentNode.right = null;
            this.addRemovedNodes(current?.left);
            this.addRemovedNodes(current?.right);
          }
          break;
        } 
      }
  }

  min() {
    if (!this._root && this._root !== undefined) {
      return null;
    }
      let current = this._root;
        while (current.left) {
          if (current.left) {
            current = current.left;
          }
        }
        return current.data;
  }
  max() {

    if (!this._root) {
      return null;
    }
      let current = this._root;
        while (current.right) {
          current = current.right;
        }
    return current.data;
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
tree.remove(6);
tree.remove(2);
console.log(tree.has(9));


module.exports = {
  BinarySearchTree
};