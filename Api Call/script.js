const api = "https://jsonplaceholder.typicode.com/todos/";
const apiUrl = "https://jsonplaceholder.typicode.com/posts/";
const postListContainer = document.querySelector(".post-list-container");

/// fetch api using XHR -- XMLHTTPREQUEST
const fetchApiUsingXHR = (apiUrl) => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", apiUrl);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      displayPost(xhr.response);
    } else {
      console.log("Some error occured");
    }
  };
};

const displayPost = (posts) => {
  postListContainer.innerHTML = posts
    .map((postItem) => {
      return `<div class="post">
              <h2>UserId: ${postItem.userId}</h2>
        <h3>Title: ${postItem.title}</h3>
        <p>Body: ${postItem.body}</p>
        </div>`;
    })
    .join(" ");
};
fetchApiUsingXHR(apiUrl);
