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
export async function createNewPost(title, description, price, user, token) {
  await fetch(`${APIURL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        author: user,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}
