const images = [
  ['/vintageautomuseum-org/gallery/images/current-display/a1.jpg', '/vintageautomuseum-org/gallery/images/current-display/a2.jpg', '/vintageautomuseum-org/gallery/images/current-display/b1.jpg', '/vintageautomuseum-org/gallery/images/current-display/b2.jpg', '/vintageautomuseum-org/gallery/images/current-display/c1.jpg', '/vintageautomuseum-org/gallery/images/current-display/c2.jpg'],
  ['/vintageautomuseum-org/gallery/images/2024-fall-display-roaring-20s/01.jpg', '/vintageautomuseum-org/gallery/images/2024-fall-display-roaring-20s/02.jpg', '/vintageautomuseum-org/gallery/images/2024-fall-display-roaring-20s/03.jpg', '/vintageautomuseum-org/gallery/images/2024-fall-display-roaring-20s/04.jpg'],
  ['/vintageautomuseum-org/gallery/images/2023-winter-show-nyc/01.jpg', '/vintageautomuseum-org/gallery/images/2023-winter-show-nyc/02.jpg', '/vintageautomuseum-org/gallery/images/2023-winter-show-nyc/03.jpg', '/vintageautomuseum-org/gallery/images/2023-winter-show-nyc/04.jpg', '/vintageautomuseum-org/gallery/images/2023-winter-show-nyc/05.jpg'],
  ['/vintageautomuseum-org/gallery/images/2022-spring-show-allaire/01.jpg', '/vintageautomuseum-org/gallery/images/2022-spring-show-allaire/02.jpg', '/vintageautomuseum-org/gallery/images/2022-spring-show-allaire/03.jpg'],
  ['/vintageautomuseum-org/gallery/images/2021-summer-display-british-invasion/01.jpg', '/vintageautomuseum-org/gallery/images/2021-summer-display-british-invasion/02.jpg', '/vintageautomuseum-org/gallery/images/2021-summer-display-british-invasion/03.jpg', '/vintageautomuseum-org/gallery/images/2021-summer-display-british-invasion/04.jpg']
];

let currentSetIndex = 0;
let currentPicIndex = 0;

function openViewer(setIndex, picIndex) {
  currentSetIndex = setIndex;
  currentPicIndex = picIndex;
  document.getElementById('viewer-image').src = images[currentSetIndex][currentPicIndex];
  document.getElementById('viewer').style.display = 'flex';
}

function closeViewer() {
  document.getElementById('viewer').style.display = 'none';
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
