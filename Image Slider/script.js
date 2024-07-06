const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");
const apiUrl = "https://picsum.photos/v2/list?page=1&limit=7";

const displayImages = (data) => {
  slider.innerHTML = data
    .map((image) => {
      return `<div class = "slide">
          <img  src=${image.download_url} alt=${image.url}>
          
          </div>`;
    })
    .join(" ");
  dotsContainer.innerHTML = data
    .map((_, index) => {
      return `<span class="dot ${
        index === 0 ? "active" : ""
      }" data-slide= ${index}></span>`;
    })
    .join(" ");
};
const fetchApi = async (apiUrl) => {
  const Images = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
        displayImages(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  console.log(await Images);
  return await Images;
};

fetchApi(apiUrl);

setTimeout(() => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;

  function activeDot(slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dotItem) => dotItem.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  }

  function changeCurrentSlide(currentSlide) {
    slides.forEach(
      (slideItem, index) =>
        (slideItem.style.transform = `translateX(${
          100 * (index - currentSlide)
        }%)`)
    );
  }

  changeCurrentSlide(currentSlide);

  nextBtn.addEventListener("click", () => {
    currentSlide++;

    if (slides.length - 1 < currentSlide) {
      currentSlide = 0;
    }

    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide--;

    if (0 > currentSlide) {
      currentSlide = slides.length - 1;
    }

    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("dot")) {
      const currentSlide = event.target.dataset.slide;
      changeCurrentSlide(currentSlide);
      activeDot(currentSlide);
    }
  });
}, 1000);
