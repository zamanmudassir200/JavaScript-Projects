// const displayAge = document.querySelector(".display-age");
// const calculateAge = document.getElementById("calculate-age");
// const ageInput = document.getElementById("age-input");

// calculateAge.addEventListener("click", () => {
//   const date = new Date(ageInput.value);
//   const millisecnd = date.getTime();
//   console.log("inputted date: ", millisecnd);
//   const todaysDate = Date.now();
//   console.log("Todays Date: ", todaysDate);
//   const finalDate = todaysDate - millisecnd;
//   console.log("final date", finalDate);
//   if (ageInput.value === "") {
//     displayAge.innerText = `Please select your date of birth`;
//   } else if (finalDate > 0) {
//     const years = Math.floor(finalDate / (1000 * 60 * 60 * 24 * 365));
//     const months = Math.floor(
//       (finalDate % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.42)
//     );

//     const days = Math.floor(
//       (finalDate % (1000 * 60 * 60 * 24 * 30.42)) / (1000 * 60 * 60 * 24)
//     );
//     const hours = Math.floor(
//       (finalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );

//     displayAge.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, <span>${days}</span>  days and <span>${hours}</span>  hours old`;
//   } else {
//     displayAge.innerText = `You cannot choose age in the future`;
//   }
// });

const displayAge = document.querySelector(".display-age");
const calculateAge = document.getElementById("calculate-age");
const ageInput = document.getElementById("age-input");

calculateAge.addEventListener("click", () => {
  const date = new Date(ageInput.value);
  const millisecnd = date.getTime();
  const todaysDate = Date.now();
  const finalDate = todaysDate - millisecnd;
  if (ageInput.value === "") {
    displayAge.innerText = `Please select your date of birth`;
  } else if (finalDate > 0) {
    const birthDate = new Date(ageInput.value);
    console.log("birthdate ", birthDate);
    const today = new Date();
    console.log("Today:", today);
    let years = today.getFullYear() - birthDate.getFullYear();
    console.log("years:", years);

    let months = today.getMonth() - birthDate.getMonth();
    console.log("months:", months);

    let days = today.getDate() - birthDate.getDate();
    console.log("days:", days);

    let hours = today.getHours() - birthDate.getHours();
    console.log("hours:", hours);

    // Adjust months and years
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    // Adjust days and months
    if (days < 0) {
      const lastMonth = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        birthDate.getDate()
      );
      console.log("lastMonth", lastMonth);
      days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
      months--;
    }

    // Adjust hours and days
    if (hours < 0) {
      hours += 24;
      days--;
    }

    displayAge.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, <span>${days}</span> days, and <span>${hours}</span> hours old`;
  } else {
    displayAge.innerText = `You cannot choose a date in the future`;
  }
});
