const imageButton = document.getElementById('img-button');
const textButton = document.getElementById('txt-button');
const imageSection = document.getElementById('img-section');
const textSection = document.getElementById('txt-section');

const memeContainer = document.getElementById('meme-container');
const downloadButton = document.getElementById('download-button');

const url = document.getElementById('url');
const imgMeme = document.getElementById('img-meme-container');

const bgImgColor = document.getElementById('bg-color');
const bgImgColorValue = document.getElementById('bg-color-value');

const bgImgBlendMode = document.getElementById('bg-blend-mode');

const brightnessImg = document.getElementById('brightness');
const opacityImg = document.getElementById('opacity');
const contrastImg = document.getElementById('contrast');
const blurImg = document.getElementById('blur');
const grayscaleImg = document.getElementById('grayscale');
const sepiaImg = document.getElementById('sepia');
const hueRotateImg = document.getElementById('hue-rotation');
const saturationImg = document.getElementById('saturation');
const invertImg = document.getElementById('invert');

const resetButton = document.getElementById('reset-button');


// toggle img and txt aside w/ func.

function toggleSections() {
    if (imageSection.style.display === 'block') {
        imageSection.style.display = 'none';
        textSection.style.display = 'block';
    } else {
        imageSection.style.display = 'block';
        textSection.style.display = 'none';
    }
}
textButton.addEventListener('click', toggleSections);
imageButton.addEventListener('click', toggleSections);

// download button

function downloadMeme () {
    domtoimage.toBlob(memeContainer).then(function (blob) {
        saveAs(blob, 'mi-meme.png')
    }
    )
}
downloadButton.addEventListener('click', downloadMeme);

// img section -->

// url

url.addEventListener('keyup', (e) => {
    let value = e.target.value;
    imgMeme.style.backgroundImage = `url('${value}')`; 
});

// bg img color

bgImgColor.addEventListener('input', (e) => {
    let value = e.target.value;    
    imgMeme.style.backgroundColor = `${value}`;
    bgImgColorValue.innerHTML = value.toUpperCase();   
});

// bg img blendmode

bgImgBlendMode.addEventListener('change', (e) => {
    let value = e.target.value;
    imgMeme.style.backgroundBlendMode = e.target.value;
})

// bg img filters

const filterImg = () =>{
    imgMeme.style.filter = `brightness(${brightnessImg.value}) opacity(${opacityImg.value}) contrast(${contrastImg.value}%) blur(${blurImg.value}px) grayscale(${grayscaleImg.value}%) sepia(${sepiaImg.value}%) hue-rotate(${hueRotateImg.value}deg) saturate(${saturationImg.value}%) invert(${invertImg.value})`;
};

brightnessImg.addEventListener('change', filterImg);
opacityImg.addEventListener('change', filterImg);
contrastImg.addEventListener('change', filterImg);
blurImg.addEventListener('change', filterImg);
grayscaleImg.addEventListener('change', filterImg);
sepiaImg.addEventListener('change', filterImg);
hueRotateImg.addEventListener('change', filterImg);
saturationImg.addEventListener('change', filterImg);
invertImg.addEventListener('change', filterImg);

// reset button

resetButton.addEventListener('click', () => {
    brightnessImg.value = 1;
    opacityImg.value = 1;
    contrastImg.value = 100;
    blurImg.value = 0;
    grayscaleImg.value = 0;
    sepiaImg.value = 0;
    hueRotateImg.value = 0;
    saturationImg.value = 100;
    invertImg.value = 0;
}
)