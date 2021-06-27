const subject = "Урок 5. JavaScript. Promise. Что это, как работает (+ пример)";
//https://youtu.be/1idOY3C1gYU?list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
const baseUrl = "https://youtu.be/";
const queryString = "1idOY3C1gYU";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

console.log("Request data ...");

//Без промисов большая вложенность коллбеков
// setTimeout(() => {
//   console.log("Preparing data...");
//   const backendData = {
//     server: "aws",
//     port: 3000,
//     status: "working",
//   };
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data recived", backendData);
//   }, 2000);
// }, 2000);

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing data...");
    const backendData = {
      server: "aws",
      port: 3000,
      status: "working",
    };
    resolve(backendData);
  }, 2000);
});

p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  });
})
  .then((data) => {
    data.fromThenModified = true;
    return data;
  })
  .then((data) => {
    console.log("Modified", data);
  })
  .catch((error) => {
    // если отработает reject
    console.log("Error : ", error);
  })
  .finally(() => {
    console.log("finaly");
  });

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log("After 2 sec"));
// sleep(3000).then(() => console.log("After 3 sec"));

// Promise.all - выполнится как только выполнятся все промисы в массиве
// удобно когда надо получить данные из разных серверов
Promise.all([sleep(1000), sleep(3000)]).then(() => {
  console.log("All promises are Done!");
});

// Promise.race - выполнится как только выполнятся один из промисов
Promise.race([sleep(1000), sleep(3000)]).then(() => {
  console.log("Race promise Done!");
});

// Внутри промисы построены на callback и context
