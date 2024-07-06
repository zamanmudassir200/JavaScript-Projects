const loadMoreContainer = document.querySelector(".load-more-container");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
let currentStep = 0;
const fetchProducts = async (getCurrentStep) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=50&skip=${
        getCurrentStep === 0 ? 0 : getCurrentStep * 10
      }`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data.products);
    if (data && data.products.length > 0) {
      displayListOfProducts(data.products);
    }
  } catch (error) {
    console.log(error);
  }
};

const displayListOfProducts = (getListOfProducts) => {
  getListOfProducts.map((productItem) => {
    const productListsWrapper = document.createElement("div");
    productListsWrapper.classList.add("productListWrapper");
    const productTitle = document.createElement("p");
    const productImage = document.createElement("img");
    const productDescription = document.createElement("p");
    productDescription.classList.add("productDesc");
    const productPrice = document.createElement("p");
    productTitle.textContent = `Title: ${productItem.title}`;
    productImage.src = productItem.thumbnail;
    productPrice.textContent = `Price: ${productItem.price}`;
    productDescription.textContent = `Description: ${productItem.description}`;
    productListsWrapper.appendChild(productImage);
    productListsWrapper.appendChild(productTitle);
    productListsWrapper.appendChild(productDescription);
    productListsWrapper.appendChild(productPrice);
    loadMoreContainer.appendChild(productListsWrapper);
  });
  console.log(loadMoreContainer.children.length);
  if (loadMoreContainer.children.length == 288) {
    loadMoreBtn.setAttribute("disabled", true);
  }
};
fetchProducts(currentStep);

loadMoreBtn.addEventListener("click", () => {
  fetchProducts((currentStep += 1));
  if (data.products === null) {
    console.log("hello");
  }
});
