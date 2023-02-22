class DoublyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    push(val) {
        let newNode = new DoublyLinkedListNode(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this
    }

}


module.exports = { DoublyLinkedListNode, DoublyLinkedList }
