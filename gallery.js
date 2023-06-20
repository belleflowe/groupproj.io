window.addEventListener('DOMContentLoaded', function() {
    var imageThumbs = document.getElementById("image-thumbs");
    for (var i = 1; i <= 10; i++) {
        var thumb = document.createElement("img");
        thumb.classList.add("thumb");
        thumb.src = "image" + i + ".jpg";
        thumb.alt = "Image " + i;
        imageThumbs.appendChild(thumb);
    }
    var thumbs = document.getElementsByClassName("thumb");
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].addEventListener("click", function() {
            var currentImage = document.getElementById("current-image");
            currentImage.src = this.src;
            currentImage.alt = this.alt;
        });
    }
 });
