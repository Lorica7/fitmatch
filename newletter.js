window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    setTimeout (classChanger, 1500);
    console.log (ev);
    console.log ('no way!!!');
  }
};

let classChanger = function () {
  document.getElementById ('banner1').classList.add ('moved');
};
