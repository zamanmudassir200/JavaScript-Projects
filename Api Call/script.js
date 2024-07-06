const api = "https://jsonplaceholder.typicode.com/todos/";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const postListContainer = document.querySelector(".post-list-container");

/// fetch api using XHR -- XMLHTTPREQUEST
// const fetchApiUsingXHR = (apiUrl) => {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", apiUrl);
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       console.log(xhr.response);
//       displayPost(xhr.response);
//     } else {
//       console.log("Some error occured");
//     }
//   };
// };
// const fetchApiUsingFetchMethod = (apiUrl) => {
//   const fetchRequest = fetch(apiUrl, {
//     method: "GET",
//   });
//   fetchRequest
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       displayPost(data);
//     })
//     .catch((err) => console.log(err));
// };
// const fetchApiUsingAsyncAwaitMethod = async (apiUrl) => {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log(data);
//     displayPost(data);
//   } catch (error) {
//     postListContainer.innerHTML = `<div class="error">
//     <h3>Error Occured: ${error.message}</h3>
//     </div>`;
//   }
// };

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
const helperMethod = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  return promise;
};
const fetchApiUsingAsyncAwaitMethod = async (apiUrl) => {
  const response = await helperMethod("GET", apiUrl);
  console.log(response);
};
fetchApiUsingAsyncAwaitMethod(apiUrl);

// fetchApiUsingFetchMethod(apiUrl);
// fetchApiUsingXHR(apiUrl);
