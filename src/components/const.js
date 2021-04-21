export const XSizeFactor = () => {
    if (window.innerHeight < window.innerWidth)
        return window.innerHeight;
    else
        return window.innerWidth;
}