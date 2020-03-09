"use strict";
//Получение элементов из DOM
let box = document.getElementById('box'); // получение элемнта по id
let btn = document.getElementsByTagName('button'); // получение всех тэгов button на странице, ввиде псевдомассива.
let circle = document.getElementsByClassName('circle'); // получение всех тэгов с классом circle на странице, ввиде псевдомассива.

let heart = document.querySelectorAll('body .heart'); // Возвращает массив CSS селекторов(также можно использовать вложенность через пробел).
// При вызове нужно указывать тип элемента, например класс точкой(.), id решеткой (#)
// Для этого метода работает цикл forEach, можно перебрать весь массив и сделать что-то с каждым элементом
let oneHeart = document.querySelector('.heart'); // получит первый элемент на странице с запрашиваемым селектором
let wrapper = document.querySelector('.wrapper');//получит элемент с классом wrapper как псевдомассив

//Применение, изменение стилей элеметнов
box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';
// цикл для обхода всех элементов массива heart 
/* for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
} */
//более удобный цикл для обхода всех элементов массива
heart.forEach(function (item, i, herts) {
    item.style.backgroundColor = 'magenta'; // метод позволяет добавить одну строчку css-кода
    item.style.cssText = 'color: purple';  //альтернативный метод позволяет добавлять блоки css-кода
}); 

//создание элементов
let div = document.createElement('div'),// покачто только в скрипте создаем, на странице еще его нет
    text = document.createTextNode('Тут был я');
    div.classList.add('black'); // добавление тэгу div класса black
//Добавление html 
div.innerHTML = 'Hello world!'; // добавляем тэгу div дополнительные тэги или текст
box.innerHTML = '<h2>Hello sasha!</h2>';//  еще пример добавляем дополнительные тэги элементу html
circle[1].textContent ='Hello!'; // метод textContent более безопасный для добавления в тэги текста если текст получаем от пользователя
//Добавление созданных элементов на страницу
// Перемещение элементов/ добавление/замена
heart[0].before(div);//Добавляем элемент div на страницу пред нужным нам тэгом// только теперь он попадает на страницу(это относится к тэгам созданным при помощи js)
heart[2].remove();// удалить элемент
circle[2].replaceWith(btn[1]); // заменит элемент circle  на  btn */

/* Вот методы для различных вариантов вставки:

node.append(...nodes or strings) – добавляет узлы или строки в конец node,
node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
node.before(...nodes or strings) –- вставляет узлы или строки до node,
node.after(...nodes or strings) –- вставляет узлы или строки после node,
node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками. */
circle[0].textContent ='Circle';
circle[0].classList.add('circleNew');
