// Select all images in the header slider
const imgs = document.querySelectorAll('.header-slider ul img');

// Select the previous and next button elements
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

// Initialize the index for the current slide
let n = 0;

// Function to change the displayed slide
function changeSlide() {
  // Hide all images
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none'; // Set display to 'none' to hide the image
  }
  // Display the current image
  imgs[n].style.display = 'block'; // Set display to 'block' to show the current image
}

// Initial call to display the first slide
changeSlide();

// Event listener for the previous button
prev_btn.addEventListener('click', (e) => {
  // Decrement the index if possible, otherwise wrap around to the last slide
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  // Change the displayed slide
  changeSlide();
})

// Event listener for the next button
next_btn.addEventListener('click', (e) => {
  // Increment the index if possible, otherwise wrap around to the first slide
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  // Change the displayed slide
  changeSlide();
})

// Select all elements with the class 'products'
const products = document.querySelectorAll('.products');

// Add a scroll event listener to each product element
for (const item of products) {
  item.addEventListener('wheel', (e) => {
    // Prevent the default scrolling behavior
    e.preventDefault();
    // Scroll the element horizontally based on the vertical scroll delta
    item.scrollLeft += e.deltaY;
  })
}