const images = [
    ['/vamnj-org/gallery/images/current-display/01.jpg', '/vamnj-org/gallery/images/current-display/02.jpg', '/vamnj-org/gallery/images/current-display/03.jpg', '/vamnj-org/gallery/images/current-display/04.jpg', '/vamnj-org/gallery/images/current-display/05.jpg', '/vamnj-org/gallery/images/current-display/06.jpg'],
    ['/vamnj-org/gallery/images/pickup-trucks/01.jpg', '/vamnj-org/gallery/images/pickup-trucks/02.jpg', '/vamnj-org/gallery/images/pickup-trucks/03.jpg', '/vamnj-org/gallery/images/pickup-trucks/04.jpg'],
    ['/vamnj-org/gallery/images/stock-cars/01.jpg', '/vamnj-org/gallery/images/stock-cars/02.jpg', '/vamnj-org/gallery/images/stock-cars/03.jpg', '/vamnj-org/gallery/images/stock-cars/04.jpg', '/vamnj-org/gallery/images/stock-cars/05.jpg', '/vamnj-org/gallery/images/stock-cars/06.jpg'],
    ['/vamnj-org/gallery/images/50s-60s/01.jpg', '/vamnj-org/gallery/images/50s-60s/02.jpg', '/vamnj-org/gallery/images/50s-60s/03.jpg', '/vamnj-org/gallery/images/50s-60s/04.jpg']
];

let currentSetIndex = 0;
let currentPicIndex = 0;

function handleKey(event) {
    if (event.key === 'ArrowLeft') { prevImage(event); }
    else if (event.key === 'ArrowRight') { nextImage(event); }
    else if (event.key === 'Escape') { closeViewer(); }
}

function openViewer(setIndex, picIndex) {
    currentSetIndex = setIndex;
    currentPicIndex = picIndex;
    document.getElementById('viewer-image').src = images[currentSetIndex][currentPicIndex];
    document.getElementById('viewer').style.display = 'flex';

    // Disable all scrolling on the page
    document.body.style.overflow = 'hidden';
    
    document.addEventListener('keydown', handleKey);
}

function closeViewer() {
    document.getElementById('viewer').style.display = 'none';
    
    // Re-enable scrolling on the page
    document.body.style.overflow = '';
    
    document.removeEventListener('keydown', handleKey);
}

function prevImage(event) {
    event.stopPropagation();
    currentPicIndex = (currentPicIndex - 1 + images[currentSetIndex].length) % images[currentSetIndex].length;
    document.getElementById('viewer-image').src = images[currentSetIndex][currentPicIndex];
}

function nextImage(event) {
    event.stopPropagation();
    currentPicIndex = (currentPicIndex + 1) % images[currentSetIndex].length;
    document.getElementById('viewer-image').src = images[currentSetIndex][currentPicIndex];
}
