console.log ('hi there');

const grabDiv = document.getElementById ('orb');

grabDiv.addEventListener ('mouseover', () => {
  grabDiv.classList.add ('orb');
  console.log ('mousing over!');
});

grabDiv.addEventListener ('mouseout', () => {
  grabDiv.classList.remove ('orb');
  console.log ('mousing out');
});

const grabDiv2 = document.getElementById ('second');
const getTarget = document.getElementById ('target');

getTarget.addEventListener ('mouseover', () => {
  grabDiv2.classList.add ('orb');
  console.log ('mousing over!');
});

getTarget.addEventListener ('mouseout', () => {
  grabDiv2.classList.remove ('orb');
  console.log ('mousing out');
});

const getTarget3 = document.getElementById ('target-three');

getTarget3.addEventListener ('mouseover', () => {
  getTarget3.classList.add ('orb');
  console.log ('mousing over!');
});

getTarget3.addEventListener ('mouseout', () => {
  getTarget3.classList.remove ('orb');
  console.log ('mousing out');
});
