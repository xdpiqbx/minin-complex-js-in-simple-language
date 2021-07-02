const subject = "Урок 17. JavaScript. Все о LocalStorage";
//https://www.youtube.com/watch?v=3-bZ7gLVSzo
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=3-bZ7gLVSzo";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

const myNumber = 42;

// localStorage работает только со строками!
// при setItem попытается привести к строке и сохранить
// при getItem вернёт строку
/*
  localStorage.getItem('number')
  localStorage.setItem('number', myNumber.toString())
  localStorage.removeItem('number')
  localStorage.clear()
 */

localStorage.setItem("number", myNumber);
const value = localStorage.getItem("number");
console.log(value);

const object = {
  name: "John",
  age: 20,
};

localStorage.setItem("person", JSON.stringify(object));
const parsedFronStr = JSON.parse(localStorage.getItem("person"));
console.log(parsedFronStr);

//*********************/
// Это событие вызывается в соседней вкладке тогда когда что-то записывается в localstorage
// если событие происходит в текущей вкладке, то событие не вызывается
// нужно для синхронизации вкладок
// window.onstorage = () => {}
window.addEventListener("storage", (event) => {
  console.log(event);
});

//Localstorage - 5 Mb
//Localstorage - в отличии от Куков не улетает на сервер
