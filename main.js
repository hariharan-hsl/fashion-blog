/* loaders */
window.addEventListener('load',()=>{
     const loaders = document.getElementById("preloader");
     loaders.style.display = "none";
})
/* loaders-end() */

/* scroll-animation */
  window.addEventListener('scroll', showOnScroll);

function showOnScroll() {
  const boxes = document.querySelectorAll('.show');
  const triggerBottom = window.innerHeight - 150;

  boxes.forEach(show => {
    const boxTop = show.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      show.classList.add('active');
    } else {
      show.classList.remove('active');
    }
  });
}
/* scroll-animation-end() */

/* developer-options disable */
document.addEventListener('contextmenu',(event)=>{
    event.preventDefault();
})
console.log("harsha");

/* developer-options disable-end() */
