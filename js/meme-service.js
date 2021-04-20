'use strict';

var gKeywords = { happy: 12, 'funny puk': 1 };
var gImgs = [
  { id: 2, url: 'img/2.jpg', keywords: ['happy'] },
  { id: 3, url: 'img/3.jpg', keywords: ['happy'] },
];
var gMeme = {
  selectedImgId: gImgs[0].id,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I never eat Falafel',
      size: 20,
      align: 'left',
      color: 'black',
      x: 100,
      y: 50,
    },
    {
      txt: 'Yesterday was a great day',
      size: 20,
      align: 'left',
      color: 'black',
      x: 100,
      y: 350,
    },
  ],
};

function getMeme() {
  return gMeme;
}

function getImgs() {
  return gImgs;
}


function changeText(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function changeFontSize(size) {
  gMeme.lines[gMeme.selectedLineIdx].size = size;
}

function switchLine(lineIdx) {
  gMeme.selectedLineIdx = lineIdx;
}
