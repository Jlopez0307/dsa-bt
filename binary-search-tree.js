class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current  = this.root;
    if(!current) {
      this.root = new Node(val);
      return this;
    }

    while(true) {
      if(val < current.val){
        if(current.left){
          current = current.left;
        } else {
          current.left = new Node(val);
        }
      }
      if(val > current.val ){
        if(current.right){
          current = current.right;
        } else {
          current.right = new Node(val);
          return;
        }
      }
    }
    
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    //If there isnt a root value, creates a new node with value of val
    if(!current) return new Node(val);

    //If roots value is higher than val, insert new child
    if(val > current.val){

      current.right = this.insertRecursively(current.right, val);
    
    } else {

      current.left = this.insertRecursively(current.left, val);

    }

    return current;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val, current = this.root) {
    while(current) {
      if(current.val === val) return current;

      current = val < current.val ? current.left : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(!current) return undefined;

    if(current.val === val) {
      return current;
    } else {
      if(current.val > val) {
        return this.findRecursively(current.left, val)
      } else {
        return this.findRecursively(current.right, val);
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root) {
    if(!current) return [];

    let queue = [root]
    let result = [];

    while(queue.length) {
      const node = queue.pop();
      result.push(node.val);
      if(node.right) queue.push(node.right);
      if(node.left) queue.push(node.left);
    };
  };

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root) {
    let result = [];

    let traverse = (root) => {
      if(root === null) return;

      traverse(root.left);
      result.push(root.val);
      traverse(root.right);
    }
    traverse(current);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root) {
    let result = [];

    let traverse = (root) => {
      if( root === null ) return;
      traverse(root.left);
      traverse(root.right);
      result.push(root.val); 
    }
    traverse(current);
    return result

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node) {
    let queue = [];
    let result = [];

    queue.push(node);

    while(queue.length > 0){
      let temp = queue.shift();
      result.push(temp.val);

      if(temp.left) queue.push(temp.left);
      if(temp.right) queue.push(temp.right)
    }

    return result;
  }
}

module.exports = BinarySearchTree;
