const Queue = require('./queue')

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  })

  it('Deve criar uma fila', () => {
    expect(queue).toEqual({ elements: []});
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    expect(queue.size()).toEqual(0);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    queue.enqueue(3);
    expect(queue.size()).toEqual(1);
    expect(queue.peek()).toEqual(3);
  })

  it('Deve escolher o primeiro item da fila', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
  })

  it('Deve remover o primeiro item da fila', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.size()).toEqual(1);
    expect(queue.peek()).toEqual(2);
  })

  it('Deve retornar Erro ao remover item de uma fila vazia', () => {
    expect(() => queue.dequeue()).toThrow('Fila vazia');
  });
  
})