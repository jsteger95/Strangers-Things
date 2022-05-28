export const APIURL = `https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt`;
export const URL = `${APIURL}/posts`;

export async function fetchPosts(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const results = await response.json();
  const data = results.data.posts;

  return data;
}

export async function registerUser(username, password) {
  return fetch(`${APIURL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("result", result);
      return result;
    })
    .catch(console.error);
}

export async function loginUser(username, password) {
  const response = await fetch(`${APIURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const data = await response.json();
  // console.log("data", data);
  return data;
  // .then((response) => response.json())
  // .then((result) => {
  //       return result
  //     })
  //     .catch(console.error);
}
export async function createNewPost(title, description, price, token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify({
    post: {
      title: title,
      description: description,
      price: price,
    },
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/posts",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
