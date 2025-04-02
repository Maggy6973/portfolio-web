const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentPage = 0;

function updatePages() {
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.style.transform = 'rotateY(0deg)';
        } else if (index < currentPage) {
            page.style.transform = 'rotateY(-180deg)';
        } else {
            page.style.transform = 'rotateY(180deg)';
        }
    });
}

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

updatePages();

const video = document.getElementById('background-video');
video.addEventListener('timeupdate', () => {
    if (video.currentTime >= video.duration) {
        video.currentTime = 0; 
        video.play(); 
    }
});