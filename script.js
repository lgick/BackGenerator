function BG(data) {
  var that = this;

  this.document = data.document;
  this.url = data.url;
  this.number = data.number;
  this.type = data.type;
  this.download = data.download;
  this.back = data.back;
  this.forward = data.forward;
  this.select = data.select;
  this.input = data.input;
  this.statFace = data.statFace;
  this.loading = data.loading;

  this.select.onchange = function (e) {
    that.type = e.target.value;
    that.number = 0;
    that.generateBG();
  };

  this.back.onclick = function () {
    that.next('back');
    that.generateBG();
  };

  this.forward.onclick = function () {
    that.next('forward');
    that.generateBG();
  };

  this.getStatFace();
}

BG.list = {};

// добавляет библиотеку
BG.parseData = function (data) {
  if (typeof data === 'object') {
    BG.list = data;
  }
};

// следующий фон
BG.prototype.next = function (move) {
  var max = BG.list[this.type].length - 1;

  if (move === 'back') {
    if (this.number === 0) {
      this.number = max;
    } else {
      this.number -= 1;
    }
  }

  if (move === 'forward') {
    if (this.number === max) {
      this.number = 0;
    } else {
      this.number += 1;
    }
  }
};

// генерация фона
BG.prototype.generateBG = function () {
  this.loading.style.display = 'block';

  var bgImg = new Image()
    , that = this
  ;

  bgImg.src = this.url + 'images/' + this.type + '/' + BG.list[this.type][this.number]

  bgImg.onload = function () {
    var value = that.input.value
      , type = value.charAt(0)
      , bg = 'url(' + bgImg.src + ') repeat'
      , elem
      , i
      , len
    ;

    if (type === '#') {
      elem = that.document.getElementById(value.substring(1));

      if (elem) {
        elem.style.background = bg;
      }

    } else if (type === '.') {
      elems = that.document.getElementsByClassName(value.substring(1));

      for (i = 0, len = elems.length; i < len; i += 1) {
        elems[i].style.background = bg;
      }
    } else {
      that.document.body.style.background = bg;
    }

    that.getStatFace();
  };
};

// выводит номер фона и общее количество
BG.prototype.getStatFace = function () {
  var arr = BG.list[this.type];

  this.statFace.innerHTML = this.number + 1 + ' of ' + arr.length;
  this.download.href = this.url + 'images/' + this.type + '/' + arr[this.number];
  this.download.innerHTML = arr[this.number];

  this.loading.style.display = 'none';
};


(function (window, url, container) {
  'use strict';

  var document = window.document
    , bg = document.getElementById(container)
    , frag = document.createDocumentFragment()
    , download = document.createElement('a')
    , backButton = document.createElement('div')
    , forwardButton = document.createElement('div')
    , home = document.createElement('a')

    , input = document.createElement('input')
    , select = document.createElement('select')
    , option1 = document.createElement('option')
    , option2 = document.createElement('option')
    , option3 = document.createElement('option')
    , statFace = document.createElement('div')
    , loading = document.createElement('div')
    , script = document.createElement('script')
  ;

  download.id = 'BG_download';
  backButton.id = 'BG_backButton';
  forwardButton.id = 'BG_forwardButton';
  home.id = 'BG_homeButton';
  select.id = 'BG_selectValue';
  input.id = 'BG_inputValue';
  statFace.id = 'BG_statFace';
  loading.id = 'BG_loading';

  download.title = 'download';
  backButton.title = 'back';
  forwardButton.title = 'forward';
  home.title = 'github';

  download.target = '_blank';
  input.type = 'text';
  input.placeholder = '#id || .className';
  home.href = 'https://github.com/lgick/BackGenerator';
  statFace.innerHTML = '';

  option1.innerHTML = 'light';
  option2.innerHTML = 'dark';
  option3.innerHTML = 'color';

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);

  frag.appendChild(download);
  frag.appendChild(backButton);
  frag.appendChild(forwardButton);
  frag.appendChild(home);
  frag.appendChild(select);
  frag.appendChild(input);
  frag.appendChild(statFace);
  frag.appendChild(loading);

  bg.appendChild(frag);

  script.src = url + 'list.js';
  script.onload = function () {
    bg.style.top = '0px';

    new BG({
      document: document,
      url: url,
      number: 0,
      type: 'light',
      download: download,
      back: backButton,
      forward: forwardButton,
      select: select,
      input: input,
      statFace: statFace,
      loading: loading
    });
  };

  document.body.appendChild(script);

}(this, 'https://cdn.rawgit.com/lgick/BackGenerator/v1.0/', 'BackgroundGeneratorBookmarklet'));
