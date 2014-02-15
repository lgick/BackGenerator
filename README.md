# Букмарклет BackGenerator 

поможет подобрать фон для сайта


### Как использовать:

1. Посетите [сайт](http://bg.lgick.ru)
2. Перенесите ссылку в закладки
3. Кликните на букмарклет на сайте, где нужно подобрать фон
4. Понажимайте на стрелочки :)

***

#### Дополнительно:
По умолчанию фон создается для тега `<body>`, но также имеется возможность сделать фон для отдельных элементов. Для этого в поле ввода можно вписать id элемента `#<id>`, или класс элемента(ов) `.<имя класса>`

Фон можно выбирать: 
* light
* dark
* color
 
В букмарклете генерируется ссылка фона, нажав на нее текущий фон откроется в новом окне.

***

### Как использовать локально:

Скачать:
```
git clone https://github.com/lgick/BackGenerator.git BackGenerator
```
По умолчанию корневая папка букмарклета доступна по адресу `http://localhost/bg/`, поэтому нужно либо сконфигурировать сервер, либо изменить пути:

https://github.com/lgick/BackGenerator/blob/master/index.html#L55

https://github.com/lgick/BackGenerator/blob/master/index.html#L59

https://github.com/lgick/BackGenerator/blob/master/script.js#L198

https://github.com/lgick/BackGenerator/blob/master/style.css#L44

https://github.com/lgick/BackGenerator/blob/master/style.css#L52

https://github.com/lgick/BackGenerator/blob/master/style.css#L60

https://github.com/lgick/BackGenerator/blob/master/style.css#L64

https://github.com/lgick/BackGenerator/blob/master/style.css#L68

https://github.com/lgick/BackGenerator/blob/master/style.css#L114

***

### Добавление фона:

Положите фон в одну из папок:

`/images/light/`

`/images/dark/`

`/images/color/`

и добавьте его название в нужное место в этом файле https://github.com/lgick/BackGenerator/blob/master/list.js


## License

(The MIT License)

© 2014 lgick. Email: lgick@yandex.ru

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
