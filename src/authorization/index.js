import { TOKEN_KEY, USER_KEY } from "../const/Index";

export function getToken() {
    const myToken = localStorage.getItem(TOKEN_KEY);
    return myToken;
}
export function storeToken(token) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function removeToken(token) {
    localStorage.removeItem(TOKEN_KEY)
}
export function getUser(user) {
    const myUser = JSON.parse(localStorage.getItem(USER_KEY));
    return myUser;
}

export function storeUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}