const hiddenElements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {

    hiddenElements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < window.innerHeight - 100){
            el.classList.add('show');
        }

    });

});

const targetDate = new Date("June 20, 2026 12:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);