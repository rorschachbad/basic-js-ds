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
  remove(data) {
    let current = this._root;
      while (current) {
        if (current.data > data) {
          if (current.left.data === data) {
            current.left = null;
            break;
          }
          current = current.left;
        } else if (current.data < data) {
          if (current.right.data === data) {
            current.right = null;
            break;
          }
          current = current.right;
        }
      }
      return this._root;
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


module.exports = {
  BinarySearchTree
};