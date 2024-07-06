const stars = document.querySelectorAll(".fa-solid");
const rating = document.querySelector(".rating");
let currentTotalSelectedStars = -1;

const handleUpdateRatingState = (getCurrentRatingValue) => {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace("fa-solid", "fa");
    } else {
      stars[i].classList.replace("fa", "fa-solid");
    }
  }
};
const handleMouseOver = (event) => {
  const currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  else {
    handleUpdateRatingState(currentRatingValue);
  }
};
const handleOnClick = (event) => {
  let currentRatingValue = event.target.dataset.rating;
  currentTotalSelectedStars = currentRatingValue;
  handleUpdateRatingState(currentTotalSelectedStars);
  rating.textContent = currentTotalSelectedStars;
};
const handleMouseLeave = () => {
  handleUpdateRatingState(currentTotalSelectedStars);
};

stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleOnClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});
