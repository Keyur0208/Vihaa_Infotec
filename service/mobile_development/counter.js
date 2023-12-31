const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('keyur');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 50);
        } else {
            counter.innerText = value;
        }

    }
    animate();
});