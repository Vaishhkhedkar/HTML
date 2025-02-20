const flag = document.querySelector('.flag');
flag.addEventListener('mouseover', () => {
    flag.style.transform = 'scale(1.05)';
});
flag.addEventListener('mouseout', () => {
    flag.style.transform = 'scale(1)';
});