class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToHead(element){
        const newNode  = new SinglyLinkedNode(element)
        if(this.head === null){
            this.head = this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    removeFromHead(){
        if(this.head === null){
            return null
        }
        const element = this.head.element;
        this.head = this.head.next;
        if(!this.head){
            this.tail = null;
        }
        this.tail--;
        return element;
    }

    addToTail(element){
        const newNode = new SinglyLinkedNode(element);
        if(this.tail === null){
            this.head = this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFromTail(){
        if(this.tail===null){
            return null;
        }
        if(this.head === this.tail){
            const element = this.tail.element;
            this.head = this.tail = null;
            this.size --;
            return element;
        }
        let curVal = this.head;
        while(curVal.next !== this.tail){
            curVal = curVal.next;
        }
        const element = this.tail.element;
        this.tail = curVal;
        this.tail.next = null;
        this.size--;
        return element;

    }
    read(index) {
        if (index < 0 || index >= this.size) return null;
        let curVal = this.head;
        for (let i = 0; i < index; i++) {
            curVAl = curVal.next;
        }
        return curVal.element;
    }

    addAtIndex(index, element) {
        if (index < 0 || index > this.size){
             return null;
        }
        if (index === 0) {
            this.addToHead(element);
            return;
        }
        if (index === this.size) {
            this.addToTail(element);
            return;
        }
        const newNode = new SinglyLinkedNode(element);
        let curVal = this.head;
        for (let i = 0; i < index - 1; i++) {
            curVal = curVal.next;
        }
        newNode.next = curVal.next;
        curVal.next = newNode;
        this.size++;
    }

    removeFromIndex(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        if (index === 0){
             return this.removeFromHead();
        }
        if (index === this.size - 1){
             return this.removeFromTail();
        }

        let curVal = this.head;
        for (let i = 0; i < index - 1; i++) {
            curVal = curVal.next;
        }
        const element = curVal.next.element;
        curVal.next = curVal.next.next;
        this.size--;
        return element;
    }
}
