const imageButton = document.getElementById('img-button');
const textButton = document.getElementById('txt-button');
const imageSection = document.getElementById('img-section');
const textSection = document.getElementById('txt-section');

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