// Condicional (até que vai)
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Non-null assertion (não muito viável)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion (o mais recomendado)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

export default null;
