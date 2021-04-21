'use strict';

let gCanvas;
let gCtx;


function init() {
  gCanvas = document.querySelector('#canvas');
  gCtx = gCanvas.getContext('2d');
  renderGallery();
  drawImg();
}

function renderGallery() {
  const imgs = getImgs();
  let strHtmls = imgs.map(function (img) {
    return `<div class="img-container">
        <img onClick="onChooseImg('${img.id}')" src="${img.url}">
    </div>`;
  });

  document.querySelector('.gallery-container').innerHTML = strHtmls.join('');
}

function onChooseImg(id) {
  document.querySelector('.gallery-container').style.display = 'none';
  document.querySelector('.main-container').style.display = 'grid';
  changeImg(id);
  drawImg();
}

function drawImg() {
  const img = new Image();
  let meme = getMeme();
  let imgId = meme.selectedImgId;
  img.src = `./img/${imgId}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
  };
}

function onTextChange(txt) {
  //Update the model with the new txt

  changeText(txt);
  drawMeme();
}

function onChangeFontSize(size) {
  let meme = getMeme();
  let lineId = meme.selectedLineIdx;
  let txtSize = meme.lines[lineId].size;
  if (size > 0) txtSize += 5;
  else txtSize -= 5;

  //Update the model with the new font size
  changeFontSize(txtSize);
  drawMeme();
}

function onChangeFontColor(color) {
  changeFontColor(color);
  drawMeme();
}

function onChangeFontStroke(stroke) {
  changeFontStroke(stroke);
  drawMeme();
}

function onSelectFontType(fontType) {
  console.log(fontType);
  selectFontType(fontType);
  drawMeme();
}

function onMoveLine(direction) {
  let meme = getMeme();
  let lineId = meme.selectedLineIdx;
  let txtY = meme.lines[lineId].y;
  if (direction < 0) txtY += 35;
  else txtY -= 35;

  if (txtY <= 20 || txtY >= 390) return;

  moveLine(txtY);
  drawMeme();
}

function onSwitchLine() {
  let meme = getMeme();
  let lineId = meme.selectedLineIdx;
  // let txt = meme.lines[lineId].txt;
  if (lineId >= 0) {
    lineId++;
  } else {
    lineId--;
  }
  
  if (lineId < 0 || lineId >= meme.lines.length) lineId = 0;

  switchLine(lineId);
  drawMeme();
}

function drawMeme() {
  let meme = getMeme();
  const img = new Image();
  let imgId = meme.selectedImgId;
  img.src = `./img/${imgId}.jpg`;
  //when img loading is done - run this function
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    drawLines(meme.lines);
  };
}

function drawLines(lines) {
  lines.forEach(function (line) {
   
    gCtx.fillStyle = `${line.color}`;
    gCtx.strokeStyle = `${line.stroke}`;
    gCtx.font = `${line.size}px ${line.fontType}`;
    gCtx.fillText(line.txt, line.x, line.y);
    gCtx.strokeText(line.txt, line.x, line.y);
  });
}

function downloadImg(elLink) {
  var imgContent = gCanvas.toDataURL();
  elLink.href = imgContent;
}

function onShowGallery(){
  document.querySelector('.gallery-container').style.display = 'grid';
  document.querySelector('.main-container').style.display = 'none';
}