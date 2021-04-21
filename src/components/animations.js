// rubberBand Animation
export const onClickRubberBand = (x) => {
    var target = document.getElementById(x);
    target.classList.add('animate__animated', 'animate__rubberBand');
    setTimeout(() => {
        target.classList.remove('animate__animated', 'animate__rubberBand');
    }, 1000);
};
