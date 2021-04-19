'use strict';

let gCanvas;
let gCtx;
let gImgId;
// let gOffsetX;
// let gOffsetY;

function init() {
  gCanvas = document.querySelector('#canvas');
  gCtx = gCanvas.getContext('2d');
  renderGallery();
  drawImgFromlocal();
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
  gImgId = id;
}
console.log(gImgId);

function drawImgFromlocal() {
  const img = new Image();
  //   let imgId = getMeme().selectedImgId;
  img.src = `./img/${gImgId}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
  };
}

function drawText() {
  // gCtx.fillStyle = 'orange'
  // gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
  // gCtx.fillStyle = '#fff'
  // gCtx.strokeStyle = 'green'
  // gCtx.lineWidth = 5
  let lineId = getMeme().selectedLineIdx;
  let txt = getMeme().lines[lineId].txt;
  let txtSize = getMeme().lines[lineId].size;
  let txtAlign = getMeme().lines[lineId].align;
  let txtColor = getMeme().lines[lineId].color;
  gCtx.font = '40px Impact';
  gCtx.fillText(txt, 100, 100);
  gCtx.strokeText(txt, 100, 100);
}

function draw(ev) {
  // gCtx.save()
  const offsetX = ev.offsetX;
  const offsetY = ev.offsetY;
  drawText();
  // drawText('fafafasdasd', offsetX, offsetY)
  //     switch (gCurrShape) {
  //     case 'triangle':
  //         drawTriangle(offsetX, offsetY)
  //         break;
  //     case 'rect':
  //         drawRect(offsetX, offsetY)
  //         break;
  //     case 'text':
  //         drawText('test', offsetX, offsetY)
  //         break;
  //     case 'line':
  //         drawLine(offsetX, offsetY)
  //         break;
  // }
  // gCtx.restore()
}

function onTextChange(elTxt) {
  handleMemeTxt(elTxt);
}
