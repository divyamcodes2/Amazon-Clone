// How to make the arrows of a slider responsive and working

const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none'; //This part lets you change the appearance of an HTML element
    // This function renders which display property you have chosen . For ex -: flex,grid,inline,etc.
  }
  imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', (e) => {
  if (n > 0) {
    n--;
  }
  else {
    n = imgs.length - 1;
  }
  changeSlide();

})

next_btn.addEventListener('click', (e) => {
  if (n < imgs.length - 1) {
    n++;
  }
  else {
    n = 0;
  }
  changeSlide();
})

const chutia = document.querySelectorAll('.products');
for (const item of chutia) {
  item.addEventListener('wheel', (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  })
}