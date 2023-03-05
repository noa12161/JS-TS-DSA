class LLNode<T> {
  value: T;
  next: LLNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class SLL<T> {
  head: LLNode<T> | null = null;
  next: LLNode<T> | null = null;
  size: number;

  prepend(value: T) {
    const newNode = new LLNode(value);
    const prevHead = this.head;

    if (this.head === null) {
      this.head = newNode;
    } else if (prevHead) {
      this.head = newNode;
      this.head.next = prevHead;
    }

    this.size++;
  }

  append(value: T) {
    const newNode = new LLNode(value);
    let current = this.head;
    let last: LLNode<T>;

    if (current === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
    return;
  }

  insertAfter(value: T, findValue: T) {
    const newNode = new LLNode(value);
    let current = this.head;

    if (!current) {
      this.append(value);
      return;
    }

    while (current) {
      if (current.value === findValue) {
        newNode.next = current.next;
        current.next = newNode;
      }
      current = current.next;
    }

    this.size++;
  }

  log() {
    let current = this.head;
    const values: T[] = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values);
  }
}

const sll = new SLL();

sll.append(1);
sll.append(2);
sll.append(3);
sll.insertAfter(444, 2);
sll.insertAfter(66, 444);
sll.insertAfter(4312, 3);
sll.insertAfter(777, 2);

sll.log();
