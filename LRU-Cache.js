class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.curSize = 0;
    this.cache = {};
    this.list = new DLinkList();
  }

  insertKeyValuePair(key, value) {
    if (!(key in this.cache)) {
      // IF KEY ISN'T PRESENT, TEST SIZE LIMIT AND ADD NEW NODE
      if (this.curSize === this.maxSize) this.evictLast();
      else this.curSize++;

      this.cache[key] = new Node(key, value);
      // IF KEY IS PRESENT THEN JUST REPLACE KEY'S VALUE
    } else this.cache[key].value = value;

    // UPDATE RECENT WITH LATEST WHOLE NODE
    this.updateRecent(this.cache[key]);
  }

  getValueFromKey(key) {
    if (!(key in this.cache)) return null;
    // UPDATE LATEST SINCE JUST CHECKED OUT
    this.updateRecent(this.cache[key]);
    return this.cache[key].value;
  }

  getMostRecentKey() {
    return this.list.head.key;
  }

  evictLast() {
    const lastKey = this.list.tail.key;
    this.list.removeTail();
    delete this.cache[lastKey];
  }

  updateRecent(node) {
    this.list.setHead(node);
  }
}

const DLinkList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // ALREADY THE HEAD
    if (this.head === node) return;
    // EMPTY LIST
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      // ONLY ONE NODE LIST THAT ISN'T TARGET NODE
    } else if (this.head === this.tail) {
      this.tail.prev = node;
      this.head.next = this.tail;
      this.head = node;
      // ADD NODE INTO EXISTING LIST
    } else {
      if (this.tail === node) this.removeTail();
      node.removeBinds();
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  removeTail() {
    // TAIL ALREADY DOESN'T EXIST
    if (this.tail === null) return;
    // TAIL IS THE WHOLE LIST ALREADY SO REMOVE ALL
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      // PUSH BACK TAIL POINTER AND POINT TO NULL END
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
};

const Node = class {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  removeBinds() {
    if (this.prev !== null) this.prev.next = null;
    if (this.next !== null) this.next.prev = null;
    this.prev = null;
    this.next = null;
  }
};

// --------------------- USING MAP JAVASCRIPT OBJECT ---------------------

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
    }
  }
}
