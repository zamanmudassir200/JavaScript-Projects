const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It was developed by Facebook and is used to create single-page applications. React allows developers to build reusable UI components.",
  },
  {
    id: 2,
    title: "What is TailwindCSS?",
    content:
      "TailwindCSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your HTML. It helps in creating responsive and modern web designs quickly.",
  },
  {
    id: 3,
    title: "How to get started with a Food Recipe App?",
    content:
      "To get started with a Food Recipe App, you need to set up a React project, install TailwindCSS, and create components for displaying recipes. You can fetch recipe data from an API or create your own dataset.",
  },
  {
    id: 4,
    title: "Why use React and TailwindCSS together?",
    content:
      "Using React and TailwindCSS together allows for rapid development of modern web applications. React provides the structure and interactivity, while TailwindCSS offers flexible styling options without writing custom CSS.",
  },
  {
    id: 5,
    title: "Where can I find the project code?",
    content:
      "You can find the project code on GitHub. Feel free to explore the code, contribute, or use it as a reference for your own projects.",
  },
];

const accordionWrapper = document.querySelector(".accordion");

const accordionItems = () => {
  accordionWrapper.innerHTML = accordionData
    .map((item) => {
      return `<div class="accordion-item">
      <div key=${item.id} class="accordion-question">
    <h1>${item.title}</h1>
    <div class="accordion-question-icon">+</div>
    </div>
    <div class="accordion-answer">
    <p>${item.content}</p>
    </div>
    </div>`;
    })
    .join(" ");
};
accordionItems();

const accordionQuestionIcon = document.querySelectorAll(
  ".accordion-question-icon"
);

accordionQuestionIcon.forEach((currIcon) => {
  currIcon.addEventListener("click", (event) => {
    if (currIcon.classList.contains("active")) {
      currIcon.classList.remove("active");
    } else {
      let getAlreadyActiveClasses = document.querySelectorAll(".active");
      getAlreadyActiveClasses.forEach((currentActiveElement) => {
        currentActiveElement.classList.remove("active");
      });
      currIcon.classList.add("active");
    }
  });
});
// // console.log(accordionQuestionIcon);

// const data = [
//   {
//     id: "1",
//     question: "What are accordion components?",
//     answer:
//       "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
//   },
//   {
//     id: "2",
//     question: "What are they used for?",
//     answer:
//       "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
//   },
//   {
//     id: "3",
//     question: "Accordion as a musical instrument",
//     answer:
//       "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
//   },
//   {
//     id: "4",
//     question: "Can I create an accordion component with a different framework?",
//     answer:
//       "Yes of course, it is very possible to create an accordion component with another framework.",
//   },
// ];

// const accordionWrapper = document.querySelector(".accordion");

// function createAccordionData() {
//   accordionWrapper.innerHTML = data
//     .map(
//       (dataItem) => `
//       <div class="accordion_item">
//       <div class="accordion_title">
//       <h3>${dataItem.question}</h3>
//       <i class="fa-solid fa-arrow-down"></i>
//       </div>
//       <div class="accordion_content">
//       <p>${dataItem.answer}</p>
//       </div>
//       </div>
//       `
//     )
//     .join(" ");
// }

// createAccordionData();

// const getAccordionTitles = document.querySelectorAll(".accordion_title");

// console.log("====================================");
// console.log(getAccordionTitles);
// console.log("====================================");

// getAccordionTitles.forEach((currentItem) => {
//   currentItem.addEventListener("click", (event) => {
//     if (currentItem.classList.contains("active")) {
//       currentItem.classList.remove("active");
//     } else {
//       let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

//       getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
//         currentActiveItem.classList.remove("active");
//       });
//       currentItem.classList.add("active");
//     }
//   });
// });
