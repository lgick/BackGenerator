var BG = {};


BG.face = (function (window, base, container) {
  'use strict';

  var document = window.document,
    frag = document.createDocumentFragment(),
    downloadButton = document.createElement('div'),
    backButton = document.createElement('div'),
    forwardButton = document.createElement('div'),
    home = document.createElement('a'),

    input = document.createElement('input'),
    select = document.createElement('select'),
    option1 = document.createElement('option'),
    option2 = document.createElement('option'),
    option3 = document.createElement('option'),
    statFace = document.createElement('div'),
    script = document.createElement('script');

  downloadButton.id = 'BG_downloadButton';
  backButton.id = 'BG_backButton';
  forwardButton.id = 'BG_forwardButton';
  home.id = 'BG_homeButton';
  select.id = 'BG_selectValue';
  input.id = 'BG_inputValue';
  statFace.id = 'BG_statFace';

  downloadButton.title = 'download';
  backButton.title = 'назад';
  forwardButton.title = 'вперед';
  home.title = 'на сайт автора';

  input.type = 'text';
  input.placeholder = '#elem && .elem';
  home.href = 'https://github.com/lgick/BackGenerator';
  statFace.innerHTML = '103 из 214';

  option1.innerHTML = 'light';
  option2.innerHTML = 'dark';
  option3.innerHTML = 'color';

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);

  frag.appendChild(downloadButton);
  frag.appendChild(backButton);
  frag.appendChild(forwardButton);
  frag.appendChild(home);
  frag.appendChild(select);
  frag.appendChild(input);
  frag.appendChild(statFace);

  document.getElementById(container).appendChild(frag);

  script.src = base + 'list.js';
  document.body.appendChild(script);

  return {
    download: downloadButton.addEventListener('click', BG.download, false),
    back    : backButton,
    forward : forwardButton,
    select  : select,
    input   : input,
    stat    : statFace
  };

}(this, 'http://localhost/bg/', 'BackgroundGeneratorBookmarklet'));
