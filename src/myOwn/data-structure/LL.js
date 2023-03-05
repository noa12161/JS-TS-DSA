var LLNode = /** @class */ (function () {
    function LLNode(value) {
        this.next = null;
        this.value = value;
    }
    return LLNode;
}());
var SLL = /** @class */ (function () {
    function SLL() {
        this.head = null;
        this.next = null;
    }
    SLL.prototype.prepend = function (value) {
        var newNode = new LLNode(value);
        var prevHead = this.head;
        if (this.head === null) {
            this.head = newNode;
        }
        else if (prevHead) {
            this.head = newNode;
            this.head.next = prevHead;
        }
        this.size++;
    };
    SLL.prototype.append = function (value) {
        var newNode = new LLNode(value);
        var current = this.head;
        var last;
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
    };
    SLL.prototype.insertAfter = function (value, findValue) {
        var newNode = new LLNode(value);
        var current = this.head;
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
    };
    SLL.prototype.log = function () {
        var current = this.head;
        var values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values);
    };
    return SLL;
}());
var sll = new SLL();
sll.append(1);
sll.append(2);
sll.append(3);
sll.insertAfter(444, 2);
sll.insertAfter(66, 444);
sll.insertAfter(4312, 3);
sll.insertAfter(777, 2);
sll.log();
