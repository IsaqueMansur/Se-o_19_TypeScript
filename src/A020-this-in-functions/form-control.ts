export default function funcao(this: Date, arg: string): void {
  console.log(this);
  console.log(arg);
}
funcao.call(new Date(), 'Isaque');
funcao.apply(new Date(), ['Isaque']);
