const subject =
  "Урок 8. JavaScript. Как работает Async, Await. Работа с сервером c fetch";
//https://www.youtube.com/watch?v=SHiUyM_fFME
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=SHiUyM_fFME";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

// https://jsonplaceholder.typicode.com/

const placeholderUrl = "https://jsonplaceholder.typicode.com/todos/";
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

/*
// На промисах
// delay(2000).then(() => console.log("2 sec"));

function fetchTodos() {
  console.log("Fetch todo Started...");
  return delay(2000)
    .then(() => fetch(placeholderUrl))
    .then((response) => {
      return response.json();
    });
}

fetchTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
*/

// На async await
const fetchAsyncTodos = async () => {
  console.log("Fetch Async Todos Started...");
  try {
    await delay(2000);
    const response = await fetch(placeholderUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }
};
// НО! Babel всё преобразовывает в Promise
// fetchAsyncTodos(); на самом деле тут доступен .then().catch().finally()

fetchAsyncTodos();
