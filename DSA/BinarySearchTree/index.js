class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const newNode = new Node(data)
    const node = this.root
    if (node === null) {
      this.root = newNode
      return;
    } else {
      return searchTree(node)
    }
    function searchTree(node) {
      if (data < node.value) {
        if (node.left === null) {
          node.left = newNode;
          return;
        } else if (node.left !== null) {
          return searchTree(node.left)
        }
      } else if (data > node.value) {
        if (node.right === null) {
          node.right = newNode;
          return;
        } else if (node.right !== null) {
          return searchTree(node.right)
        }
      }

    }
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.value) {
        return true;
      }
      if (data < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }


  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }

  remove(data) {
    if (this.root === null) {
      return null
    }
    this.root = removeNode(this.root, data)
    function removeNode(node, data) {
      if (node.value === null) {
        return null
      } else if (data < node.value) {
        node.left = removeNode(node.left, data)
        return node
      } else if (data > node.value) {
        node.right = removeNode(node.right, data)
        return node
      } else if (node.value === data) {
        if (node.left === null && node.right === null) {
          return null
        } else if (node.left === null) {
          return node.right
        } else if (node.right === null) {
          return node.left
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value
        node.right = removeNode(node.right, tempNode.value);
        return node;
      }

    }
  }

  find(data) {
    let current = this.root;
    while (current.value !== data) {
      if (data < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    } else if (node.left === null && node.right === null) {
      return 0;
    } else if (node.left == null) {
      return (this.findMinHeight(node.right) + 1);
    } else if (node.right == null) {
      return (this.findMinHeight(node.left) + 1);
    } else {
      return Math.min(this.findMinHeight(node.left), this.findMinHeight(node.right)) + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    else if (node.left === null && node.right === null) {
      return 0;
    }
    else if (node.left == null) {
      return (this.findMaxHeight(node.right) + 1);
    } else if (node.right == null) {
      return (this.findMaxHeight(node.left) + 1);
    } else {
      return Math.max(this.findMaxHeight(node.left), this.findMaxHeight(node.right)) + 1;
    }
  }

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {       
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.value);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.value);
      };
      traversePostOrder(this.root);
      return result;
    }
  }


}

const bst = new BinarySearchTree();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst)
console.log(bst.isPresent(6))
bst.remove(6)
console.log(bst)
console.log(bst.isPresent(6))
console.log(bst.findMax())
console.log(bst.findMin())
console.log(bst.find(3))
console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.inOrder())
console.log(bst.preOrder())
console.log(bst.postOrder())
