class CustomHashTable {
  constructor(size = 5) {
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    const result = hash % this.table.length;
    return result;
  }

  set(key, value, ttl = 60) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    const expiration = Date.now() + ttl * 1000;
    this.table[index].push([key, value, expiration]);
  }

  delete(key) {
    const index = this._hash(key);
    if (!index) return 0;

    this.table.splice(index, 1);
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let [storedKey, value, expiration] of this.table[index]) {
        if (storedKey === key) {
          if (Date.now() > expiration) {
            this.delete(key);
            return undefined;
          }
          return value;
        }
      }
    }
    return undefined;
  }
}

const hashTable = new CustomHashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 30);
hashTable.set("city", "New York");
hashTable.set("username", "alice123");
console.log(hashTable.table);
console.log(hashTable.get("age"));
console.log(hashTable.delete("age"));
console.log(hashTable.table);
