let sideBar = document.querySelector(".side-bar");
let body = document.querySelector("body");

document.querySelector("#menu-btn").onclick = () =>{
    sideBar.classList.toggle("active");
    body.classList.toggle("active");
    
}
document.addEventListener('click', (event) => {
    if (!sideBar.contains(event.target) && !event.target.matches('#menu-btn')) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
});


function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
        });
    }

document.addEventListener('DOMContentLoaded', animateProgressBars);
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.progress').forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
});

const reviewContainer = document.querySelector('.review-cards');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    let scrollPosition = 0;

    rightBtn.addEventListener('click', () => {
        scrollPosition += 320;
        if(scrollPosition > reviewContainer.scrollWidth - reviewContainer.clientWidth) {
            scrollPosition = 0;
        }
        reviewContainer.style.transform = `translateX(-${scrollPosition}px)`;
    });

    leftBtn.addEventListener('click', () => {
        scrollPosition -= 320;
        if(scrollPosition < 0) {
            scrollPosition = reviewContainer.scrollWidth - reviewContainer.clientWidth;
        }
        reviewContainer.style.transform = `translateX(-${scrollPosition}px)`;
    });

    const sections = document.querySelectorAll('section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        sectionObserver.observe(section);
    });

    

