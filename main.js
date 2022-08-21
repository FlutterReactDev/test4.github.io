let timeout = null;
let nextBanner = document.querySelector(".banner");
let observer = new IntersectionObserver(
  (entries) => {
    console.log('dsadas');
    if (entries[0].isIntersecting) {
      timeout = setTimeout(() => {
        showNextBanner();
      }, 2000);
    } else {
      clearTimeout(timeout);
    }
  },
  { threshold: 0.5 }
);

function showNextBanner() {
  setTimeout(() => {
    nextBanner.style.display = "block";
    observer.disconnect();
  }, 8000);
}
observer.observe(document.querySelector(".banner1"));
