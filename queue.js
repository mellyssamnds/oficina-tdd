class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length
  }

  enqueue(element){
    this.elements.push(element)
  }

  peek() {
    if (this.elements.length === 0) {
      throw new Error('Fila vazia');
    }
    return this.elements[0];
  }
  
  dequeue() {
    if (this.elements.length === 0) {
      throw new Error('Fila vazia');
    }
    return this.elements.shift();
  }
}

module.exports = Queue