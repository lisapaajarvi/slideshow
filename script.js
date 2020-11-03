window.addEventListener('load', main);

/** Starts the program */
function main() {
    startSlideshow ();
}
/** Starts the slideshow and sets interval for changing the photo */
function startSlideshow () {
    setInterval (changePhoto, 5000);
}

/**
 * Changes the photo that displays in the slideshow
 */
function changePhoto() {
    const photos = document.querySelectorAll(".container > img");
    for (let i = 0; i < photos.length; i++) {
        if (photos[i].classList.contains("show")) {
            photos[i].classList.remove("show");
            let nextIndex = (i + 1) % photos.length;
            photos[nextIndex].classList.add("show");
            break;
        }
    }    
}
