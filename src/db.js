import sha256 from "crypto-js/sha256";

/* Welcome to the most secure databse and authentication system. */
let db = {};
let hash;

function login(userName, password) {
  let query = localStorage.getItem("users");
  let userCollection = query === null ? {} : JSON.parse(query);

  if (!userCollection.includes(userName)) {
    throw new Error(`Wrong username (${userName}) or password. Cannot log in.`);
  }

  hash = sha256(password).toString();
  db = JSON.parse(localStorage.getItem(hash));

  return true;
}

function logout() {
  db = null;
}

function signUp(userName, password) {
  let query = localStorage.getItem("users");
  let userCollection = query === null ? [] : JSON.parse(query);

  if (userName in userCollection) {
    throw new Error(`Username (${userName}) taken. Cannot sign up.`);
  }

  userCollection.push(userName);
  localStorage.setItem("users", JSON.stringify(userCollection));

  hash = sha256(password).toString();
  db = {};
  localStorage.setItem(hash, JSON.stringify(db));

  return true;
}

function isLoggedIn() {
  return db !== null;
}

function get(key) {
  if (!isLoggedIn()) {
    throw new Error("Not logged in. Cannot get data.");
  }

  return db[key];
}

function set(key, value) {
  if (!isLoggedIn()) {
    throw new Error("Not logged in. Cannot set data.");
  }

  db[key] = value;
  localStorage.setItem(hash, db);
}

export { login, logout, signUp, isLoggedIn, get, set };
