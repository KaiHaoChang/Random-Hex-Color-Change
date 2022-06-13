const click = document.querySelector('.btn');
const colorNum = document.querySelector('.colorNum')
const section = document.querySelector('section')

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const getHex = () => {
  let hexColor = '#';
  for (let i = 0; i<6; i++) {
    const random = hex[Math.floor(Math.random() * hex.length)];
    hexColor = hexColor + random
  }
  return hexColor
}
getHex()

click.addEventListener('click', (e)=> {
  let randomNum = getHex();
  colorNum.innerHTML =  randomNum
  section.style.backgroundColor = randomNum
})