const subject =
  "Урок 14. JavaScript. Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax";
//https://www.youtube.com/watch?v=eKCD9djJQKc
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=eKCD9djJQKc";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);
// https://gist.github.com/vladilenm/55757c96182d8d03678aa32b7354fe85

const requestURL = "https://jsonplaceholder.typicode.com/users";

{
  // const xhr = new XMLHttpRequest();
  // console.log(xhr);
  // xhr.open("GET", requestURL); // открывает соединение
  // xhr.responseType = "json"; // какой ожидаю ответ
  // xhr.onload = () => {
  //   // Асинхронная !!!
  //   console.log("xhr.onload = () => {");
  //   // как обработаю выполненный запрос
  //   // xhr.response - ответ строка JSON формата это если не прописывать xhr.responseType = "json";
  //   // console.log(JSON.parse(xhr.response)); без xhr.responseType = "json"; нужно JSON.parse
  //   if (xhr.status >= 400) {
  //     console.error(xhr.response);
  //   } else {
  //     console.log(xhr.response); // так пишу если предварительно указал xhr.responseType = "json";
  //   }
  // };
  // xhr.onerror = () => {
  //   // если пришла ошибка
  //   console.log(xhr.response);
  // };
  // xhr.send(); // отправляю запрос
}

console.log("=======================> XHR Promises");
function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open(method, url); // открывает соединение
    xhr.setRequestHeader("Content-Type", "application/json"); // так указал в каком формате отправил запрос
    xhr.responseType = "json"; // какой ожидаю ответ
    xhr.onload = () => {
      // Асинхронная !!!
      console.log("xhr.onload = () => {");
      // как обработаю выполненный запрос
      // xhr.response - ответ строка JSON формата это если не прописывать xhr.responseType = "json";
      // console.log(JSON.parse(xhr.response)); без xhr.responseType = "json"; нужно JSON.parse
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response); // так пишу если предварительно указал xhr.responseType = "json";
      }
    };
    xhr.onerror = () => {
      // если пришла ошибка
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(body)); // отправляю запрос
  });
}

// GET
// sendRequest("GET", requestURL)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

const body = {
  name: "John",
  age: 26,
};
// POST
sendRequest("POST", requestURL, body) //body передаю в xhr.send
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
