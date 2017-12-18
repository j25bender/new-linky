import Node from './Node';

export default class List {
  constructor () {
  	this._length = 0;
  	this._head = null;
  }

  get length() {
  	return this._length;
  }

  set length(newLength) {
  	this._length = newLength;
  }

  get head() {
  	return this._head;
  }

  set head(newHead) {
  	if (newHead === null || newHead.constructor.name === 'Node') {
  		this._head = newHead;
  	}
  }

  push(data){
  	let node = new Node(data);

  	if (!this.length) {
  		this.head = node;
  	} else {
  		//find last node
  		let currentNode = this.head;

  		while (currentNode.next !== null){
  			currentNode = currentNode.next;
  		}
  		//set last node.next = node
  		currentNode.next = node;
  	}

  	this.length++;
  }

  pop() {
  	if (!this.length) {
  		return this.head;

  	} else {
  		let currentNode = this.head;
  		let prevNode;

  		if (this.length === 1) {
  			this.head = null;
  		}

  		while (currentNode.next !== null) {
  			prevNode = currentNode;
  			currentNode = currentNode.next;
  			console.log(prevNode)
  		}

  		if (prevNode){
  			prevNode.next = null;
  		}

  		this.length--;

  		return currentNode;
  	}
  }

  unshift(data) {
  	let next = null;

  	if (this._length) {
  		next = this._head
  	}

  	this._head = new Node(data, next);
  	this._length++;
  	// console.log(JSON.stringify(this, null, 2))
  }

  shift() {
  	let oldHead = this._head;

  	if (this._length){
  		this._head = this._head.next;
  		this._length--;
  	}
  	return oldHead;
  	// console.log(JSON.stringify(this, null, 2))
  }
}
