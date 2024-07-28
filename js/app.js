const imageButton = document.getElementById('img-button');
const textButton = document.getElementById('txt-button');
const imageSection = document.getElementById('img-section');
const textSection = document.getElementById('txt-section');

const darkModeButton = document.getElementById('dark-button');

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

const topTxt = document.getElementById('top-txt');
const topTxtMeme = document.getElementById('top-txt-meme');
const bottomTxt = document.getElementById('bottom-txt');
const bottomTxtMeme = document.getElementById('bottom-txt-meme');

const topTxtCheck = document.getElementById('top-txt-check');
const bottomTxtCheck = document.getElementById('bottom-txt-check');

const fontFamily = document.getElementById('font');

const fontSize = document.getElementById('font-size');

const leftAlign = document.getElementById('left-align');
const centerAlign = document.getElementById('center-align');
const rightAlign = document.getElementById('right-align');

const colorTxt = document.getElementById('color-txt');
const colorTxtValue = document.getElementById('color-txt-value');

const bgColorTxt = document.getElementById('bg-color-txt');
const bgColorTxtValue = document.getElementById('bg-color-txt-value');

const bgTransparentCheck = document.getElementById('bg-transparent-check');

const noneOutline = document.getElementById('none-outline');
const lightOutline = document.getElementById('light-outline');
const darkOutline = document.getElementById('dark-outline');

const paddingTxt = document.getElementById('padding');

const lineSpacing = document.getElementById('line-spacing');

// header section -->

// toggle img and txt

imageButton.addEventListener('click', () => {
    imageSection.style.display = imageSection.style.display === 'block' ? 'none' : 'block';
    textSection.style.display = 'none';
});

textButton.addEventListener('click', () => {
    textSection.style.display = textSection.style.display === 'block' ? 'none' : 'block';
    imageSection.style.display = 'none';
});

// light and dark mode

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// canvas section -->

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

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    brightnessImg.value = 1;
    opacityImg.value = 1;
    contrastImg.value = 100;
    blurImg.value = 0;
    grayscaleImg.value = 0;
    sepiaImg.value = 0;
    hueRotateImg.value = 0;
    saturationImg.value = 100;
    invertImg.value = 0;
    filterImg()
})

// txt section -->

// top txt

topTxt.addEventListener('keyup', () => {    
    topTxtMeme.innerHTML = topTxt.value;    
});

// bottom txt

bottomTxt.addEventListener('keyup', () => {    
    bottomTxtMeme.innerHTML = bottomTxt.value;    
});

// top txt check

topTxtCheck.addEventListener('click', () => {
    topTxtMeme.style.display = topTxtMeme.style.display === 'none' ? 'block' : 'none';
})

// bottom txt check

bottomTxtCheck.addEventListener('click', () => {
    bottomTxtMeme.style.display = bottomTxtMeme.style.display === 'none' ? 'block' : 'none';
})

// font family

fontFamily.addEventListener('change', () => {
    topTxtMeme.style.fontFamily = `${fontFamily.value}`;
    bottomTxtMeme.style.fontFamily = `${fontFamily.value}`;
});

// font size

fontSize.addEventListener('change', () => {
    topTxtMeme.style.fontSize = `${fontSize.value}px`;
    bottomTxtMeme.style.fontSize = `${fontSize.value}px`;
});

// justify txt

leftAlign.addEventListener('click', (e) => {
    topTxtMeme.style.textAlign = 'left';
    bottomTxtMeme.style.textAlign = 'left';  
});

centerAlign.addEventListener('click', (e) => {
    topTxtMeme.style.textAlign = 'center';
    bottomTxtMeme.style.textAlign = 'center';  
});

rightAlign.addEventListener('click', (e) => { 
    topTxtMeme.style.textAlign = 'right';
    bottomTxtMeme.style.textAlign = 'right';  
});

// color txt

colorTxt.addEventListener('input', (e) => {
    let value = e.target.value;   
    topTxtMeme.style.color = `${value}`;
    bottomTxtMeme.style.color = `${value}`;
    colorTxtValue.innerHTML = value.toUpperCase();   
});

// bg txt color

bgColorTxt.addEventListener('input', (e) => {
    let value = e.target.value;   
    topTxtMeme.style.backgroundColor = `${value}`;
    bottomTxtMeme.style.backgroundColor = `${value}`;
    bgColorTxtValue.innerHTML = value.toUpperCase();   
});

// bg txt transparent

bgTransparentCheck.addEventListener('click', (e) => {
    if(e.target.checked){
        topTxtMeme.style.backgroundColor = 'transparent';
        bottomTxtMeme.style.backgroundColor = 'transparent';
        topTxtMeme.style.position = 'absolute';
        bottomTxtMeme.style.position = 'absolute';
        topTxtMeme.style.top = '0';
        bottomTxtMeme.style.bottom = '0';
        topTxtMeme.style.left = '50%';
        topTxtMeme.style.zIndex = '1';
        bottomTxtMeme.style.left = '50%';
        topTxtMeme.style.transform = 'translateX(-50%)';
        bottomTxtMeme.style.transform = 'translateX(-50%)';
        topTxtMeme.style.width = '100%';
        bottomTxtMeme.style.width = '100%';
    } else {
        topTxtMeme.style.backgroundColor = '';
        bottomTxtMeme.style.backgroundColor = '';
        topTxtMeme.style.position = '';
        bottomTxtMeme.style.position = '';
        topTxtMeme.style.top = '';
        bottomTxtMeme.style.bottom = '';
        topTxtMeme.style.left = '';
        topTxtMeme.style.zIndex = '';
        bottomTxtMeme.style.left = '';
        topTxtMeme.style.transform = '';
        bottomTxtMeme.style.transform = '';
        topTxtMeme.style.width = '';
        bottomTxtMeme.style.width = '';
    }
});

// outline txt

noneOutline.addEventListener('click', () => {
    topTxtMeme.style.webkitTextStroke = '';
    bottomTxtMeme.style.webkitTextStroke = '';
});

lightOutline.addEventListener('click', () => {
    topTxtMeme.style.webkitTextStroke = '1px white';
    bottomTxtMeme.style.webkitTextStroke = '1px white';
});

darkOutline.addEventListener('click', () => {
    topTxtMeme.style.webkitTextStroke = '1px black';
    bottomTxtMeme.style.webkitTextStroke = '1px black';
});

// padding txt

paddingTxt.addEventListener('input', () => {
    topTxtMeme.style.padding = `calc(5% + ${paddingTxt.value}px)`;
    bottomTxtMeme.style.padding = `calc(5% + ${paddingTxt.value}px)`;
});

// line spacing txt

lineSpacing.addEventListener('change', (e) => {
    let value = e.target.value;
    topTxtMeme.style.lineHeight = value;
    bottomTxtMeme.style.lineHeight = value;
});