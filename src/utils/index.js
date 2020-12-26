export const isMobile = () => {
    if (window) {
        return (window.innerWidth <= 800)
    }
    return true;
}