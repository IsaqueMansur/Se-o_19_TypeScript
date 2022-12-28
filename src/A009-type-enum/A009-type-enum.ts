enum Colors { //eslint-disable-line
  RED = 'rgb(255, 0, 0)',
  GREEN = 'rgb(0, 255, 0',
  BLUE = 'rgb(0, 0, 255)',
  ORANGE = 200
}

console.log(Colors);
console.log(Colors.RED);

function selectAnColor(color: any[Colors]): void {
  console.log(Colors[color]);
}

selectAnColor(200);
selectAnColor(199);
selectAnColor(10);
