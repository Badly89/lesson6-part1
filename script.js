var btnPrev = document.querySelector("#prev"),
    btnNext = document.querySelector("#next"),
    images = document.getElementsByTagName("img");


function init() {

    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
    // nextSlide();
    // prevSlide();
}

function changeBigPicture(eventObj) {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.id.split("-");
    var src = "img/big/pic" + imageNameParts[1] + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.style.height = "100vh";
    imageDomElement.style.border = "1px solid brown";
    appDiv.appendChild(imageDomElement);
    //  console.log(imageNameParts);

}

function nextSlide(e) {

}

function prevSlide(e) {
    console.log("1");
}

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);
window.onload = init;