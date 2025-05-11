class Node {
  constructor() {
    this.children = {};
    this.isEndOfWords = false;
  }
}

class Tree {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;

    for (let char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
      }

      currentNode = currentNode.children[char];
    }

    currentNode.isEndOfWords = true;
  }

  search(word) {
    let current = this.root;

    for (const char of word) {
      console.log(char);
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }

    return current.isEndOfWords;
  }

  startsWith(prefix) {
    let currentNode = this.root;

    for (let char of prefix) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }

    return true;
  }
}

const trie = new Tree();
trie.insert("apple");
trie.insert("april");
trie.insert("app");
trie.insert("banana");

// console.log(trie.search("apple"));
// console.log(trie.search("app"));
trie.search("ban");
// console.log(trie.startsWith("ban"));
// console.log(trie.startsWith("bat"));
