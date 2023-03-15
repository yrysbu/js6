// Ожидаемый результат: [1, 2, 3] => [3, 2, 1]

// const array = [1, 2, 3];
// const reversed = array.reverse()
// console.log(reversed)

// Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений,
//     таких как false, undefined, пустые строки, ноль, null.
//     * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// let a1 = [0, 1, false, 2, undefined, '', 3, null];
// let a2 = a1.filter(function(item) { return typeof item == 'number'; });
// console.log(a2);

// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

// let arr = [1, 2, 3, 1, 2 ];
// let unique = arr.filter((x, i) => arr.indexOf(x) === i);
// console.log(unique);

// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let a = ['a', 'b', 'c'];
// let b = a.concat(1, [2, 3]);
// console.log(b);

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let a = [1, 2, 3]
// let b = a.concat(4, 5, 6)
// console.log(b)

//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let a = [1, 2, 3]
// a.push(4, 5, 6);
// console.log(a)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let myNumber = [1, 2, 3, 4, 5]
// let removed = myNumber.splice(1, 2 )
// console.log(myNumber)

//  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let obj = { js:'test', jq: 'hello', css: 'world' };
// console.log(Object.keys(obj));

// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
//  Элементы массива будут разделены запятой.
// ['Капуста', 'Репа', 'Редиска', 'Морковка']

// let vegetable = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let myVar = vegetable.toString();
// console.log(myVar)

// const elements = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// console.log(elements.join());

// Пользователь вводит строку кириллицей разного регистра.
// Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный.
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив[кАжДыЙ оХоТнИк]


// let txt = 'КаЖдЫй ОхОтНиК'
// function changeCase(str) {
//     return str.split('').map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('');
// }
// console.log(changeCase(txt));

// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// arr1 = [1, 2, 3, 4, 5];
// arr2 = [4, 5, 6]

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [4, 5, 6]
// let arr3 = arr1.concat(arr2);
//  function sum (arr3) {
//     return arr3.reduce((acc, currentItem ) => acc + currentItem, 0)
// }
// console.log(sum(arr3))