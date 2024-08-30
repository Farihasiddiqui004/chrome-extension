const ms_images = [
    "https://www.investmentmonitor.ai/wp-content/uploads/sites/7/2021/12/microsoft-headquarters-fdi.jpg",
    "https://static01.nyt.com/images/2023/04/26/multimedia/25microsoft-print-gpjb/25microsoft-gpjb-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://www.investopedia.com/thmb/6ZlCIOXBgSpNZiOmBE77aYBKhlM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-967356980-2c3ac487066e4a99ac25a8d6adcb9c57.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Building92microsoft.jpg/640px-Building92microsoft.jpg",
    "https://cdn.britannica.com/71/103171-050-D6D9D227/Bill-Gates-Microsoft-Corporation-operating-system-press-2001.jpg",
    "https://www.bleepstatic.com/content/hl-images/2022/07/18/Microsoft.jpg",
    "https://www.shutterstock.com/image-photo/redmond-washington-usa-march-28-260nw-1357496909.jpg"
];

const siteImages = document.getElementsByTagName("img");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, sender, sendResponse);
  
    if (request.task === 'iamsrk') {
for (let i=0; i< siteImages.length; i++) {
    const randImg = Math.floor(Math.random() * ms_images.length);
    siteImages[i].src = ms_images[randImg];
}
}

const response = { status: 'done' };
sendResponse(response);
});