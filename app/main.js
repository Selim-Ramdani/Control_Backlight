// ------------------------------------------------
// ----                 BACKLIGHT              ----
// ------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const info = document.createElement("h1");
  const error = document.createElement("p");
  var img = document.querySelector(".photo");

  var options = {};

  var pictures = [
    { photo: "./images/01.png", param: 100 },
    { photo: "./images/02.png", param: 75 },
    { photo: "./images/03.png", param: 65 },
    { photo: "./images/04.png", param: 60 },
    { photo: "./images/05.png", param: 55 },
    { photo: "./images/06.png", param: 45 },
    { photo: "./images/07.png", param: 40 },
    { photo: "./images/08.png", param: 35 },
    { photo: "./images/09.png", param: 25 },
  ];

  var i = 0;
  var len = pictures.length - 1;

  (function loop() {
    if (i > len) {
      i = 0;
    }

    options.backlight = pictures[i].param;
    img.src = pictures[i].photo;
    console.log(pictures[i].photo);
    console.log(pictures[i].param);
    loopTimer = setTimeout(loop, 4000);
    ++i;

    new Configuration().setPictureProperty(successCb, failureCb, options);
  })();

  function successCb() {
    console.log("setPictureProperty success");
  }

  function failureCb(cbObject) {
    var errorCode = cbObject.errorCode;
    var errorText = cbObject.errorText;

    error.innerHTML = cbObject.errorText;
    console.log(cbObject);
  }

  container.append(error);
});
