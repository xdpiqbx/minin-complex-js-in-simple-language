const subject =
  "Урок 4. JavaScript. Асинхронность.Что такое Event Loop. JS SetTimeout 0";
//https://youtu.be/vIZs5tH-HGQ?list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
const baseUrl = "https://youtu.be/";
const queryString = "vIZs5tH-HGQ";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

// Event loop
// http://latentflip.com/loupe

/*
  Call stack
  синхронные операции попадают сразу в Call stack выполняются и завершаются

  Web API
  Асинхронная операция:
    Попадает в Call stack оттуда передаётся в Web API
    В Web API выполняется и передаётся в Callback Queue
    Какая операция первая выполнится та первая и попадёт в Callback Queue
    Из Callback Queue, кто первый пришел тот первый вышел, операции попадают в Call stack

  event listener
    когда до него доходит очередь, он регистрируется в Web API и никуда не пропадает
    с каждым срабатыванием event он попадает в Callback Queue и FIFO
*/

const timeout1sec = () => {
  console.log("In setTimeout after 1 sec");
};

console.log("===-> Start! <-===");
window.setTimeout(timeout1sec, 1000);
console.log("=====> End <=====");
