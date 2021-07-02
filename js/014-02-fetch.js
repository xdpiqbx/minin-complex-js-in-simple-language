const subject =
  "Урок 14. JavaScript. Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax";
//https://youtu.be/eKCD9djJQKc?t=1266
const baseUrl = "https://youtu.be/";
const queryString = "eKCD9djJQKc?t=1266";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`====-> fetch <-====`);
console.log(`${url}`);

const requestURL = "https://jsonplaceholder.typicode.com/users";

console.log("=======================> Fetch");

{
  // =======================> GET
  function sendRequest(method, url, body = null) {
    //fetch(url) по умолчанию выполняет GET
    //fetch(url) вернёт промис body: ReadableStream
    return fetch(url).then((response) => response.json());
  }
  // GET
  sendRequest("GET", requestURL)
    .then((data) => {
      console.log("=======================> GET");
      console.log(data);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      console.log("=======================> end GET");
    });
}

{
  // =======================> POST
  function sendRequest(method, url, body = null) {
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(url, {
      method,
      body: JSON.stringify(body),
      headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((error) => {
        const e = new Error("Something went wrong");
        e.data = error;
        throw e;
      });
    });
  }
  const body = {
    name: "John",
    age: 26,
  };

  // POST
  sendRequest("POST", requestURL, body) //body передаю в xhr.send
    .then((data) => {
      console.log("=======================> POST");
      console.log(data);
    })
    .catch((error) => {
      console.log("ERROR!!!");
      console.log("===>", error);
    })
    .finally(() => {
      console.log("=======================> end POST");
    });
}
