const objectA: {
  readonly keyA: string;
  keyB: string;
  [key: string]: unknown; // permite a criação de outra chave qualquer do tipo STRING
} = {
  keyA: 'A',
  keyB: 'B',
};

/* objectA.keyA = 'New value'; */ // A chave A não pode ser alterada pois é readonly
objectA.keyC = 'C';
objectA.keyD = 'D';

console.log(objectA);

export default null;
