/**
 * Created with JetBrains PhpStorm.
 * User: hnoe
 * Date: 28.01.13
 * Time: 2:37
 * To change this template use File | Settings | File Templates.
 */

var BG = {};


BG.face = (function (window, base, container) {
  "use strict";

  var document = window.document,
    frag = document.createDocumentFragment(),
    searchButton = document.createElement("div"),
    backButton = document.createElement("div"),
    forwardButton = document.createElement("div"),
    home = document.createElement("a"),
    img1 = document.createElement("img"),
    img2 = document.createElement("img"),
    img3 = document.createElement("img"),
    img4 = document.createElement("img"),

    input = document.createElement("input"),
    select = document.createElement("select"),
    option1 = document.createElement("option"),
    option2 = document.createElement("option"),
    option3 = document.createElement("option"),
    statFace = document.createElement("div"),
    script = document.createElement("script");

  searchButton.id = "BG_searchButton";
  backButton.id = "BG_backButton";
  forwardButton.id = "BG_forwardButton";
  home.id = "BG_homeButton";
  select.id = "BG_selectValue";
  input.id = "BG_inputValue";
  statFace.id = "BG_statFace";

  searchButton.title = "интерактивный выбор элемента";
  backButton.title = "назад";
  forwardButton.title = "вперед";
  home.title = "на сайт автора";

  input.type = "text";
  input.placeholder = "введите #elem или .elem";
  home.href = "http://bg.hnoe.ru";
  statFace.innerHTML = "103 из 214";

  img1.alt = "searchButton";
  img2.alt = "backButton";
  img3.alt = "forwardButton";
  img4.alt = "homeButton";

  img1.src = base + "img/search.png";
  img2.src = base + "img/back.png";
  img3.src = base + "img/forward.png";
  img4.src = base + "img/home.png";

  option1.innerHTML = "light";
  option2.innerHTML = "dark";
  option3.innerHTML = "color";

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);

  searchButton.appendChild(img1);
  backButton.appendChild(img2);
  forwardButton.appendChild(img3);
  home.appendChild(img4);

  frag.appendChild(searchButton);
  frag.appendChild(backButton);
  frag.appendChild(forwardButton);
  frag.appendChild(home);
  frag.appendChild(select);
  frag.appendChild(input);
  frag.appendChild(statFace);

  document.getElementById(container).appendChild(frag);

  script.src = base + "list.js";
  document.body.appendChild(script);

  return {
    search  : searchButton.addEventListener("click", BG.search, false),
    back    : backButton,
    forward : forwardButton,
    select  : select,
    input   : input,
    stat    : statFace
  };

}(this, "http://localhost/backgroundGenerator/", "BackgroundGeneratorBookmarklet"));


BG.set = function (data) {
  "use strict";

  return data;
};




