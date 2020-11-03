
window.onload = main;
// window.addEventListener('load', main);

function main() {
    startSlideshow ();
}
function startSlideshow () {
    setInterval (changePhoto, 5000);
}

function changePhoto() {
    const photos = document.querySelectorAll(".container > img");
    for (let i = 0; i < photos.length; i++) {
        if (photos[i].classList.contains("show")) {
            photos[i].classList.remove("show");
            let nextIndex = i + 1;
            if (nextIndex >= photos.length) {
                nextIndex = 0;
            }
            photos[nextIndex].classList.add("show");
            break;
        }
    }    
}
