export default (): void => {
  const html = document.querySelector('*') as HTMLElement;
  let key = true;
  const intervalModifyColor = () => setInterval(() => {
    if (key) {
      html.style.background = 'lightblue';
      key = false;
    } else {
      html.style.background = 'lightgreen';
      key = true;
    }
  }, 200);
  intervalModifyColor();
};
