function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
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
    console.log(eventElement);
    console.log(imageNameParts);

}
window.onload = init;