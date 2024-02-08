import CONST from '../constants/constants';

let myFunctionsClass = {
    // Scroll Positions

    scrollToTop() {
        window.scrollTo({
            top:0,
            behavior: 'instant'
        });
    },

    handleOldScrollPosition() {
        const scrollPosition = localStorage.getItem("scrollPosition");
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));
            localStorage.removeItem("scrollPosition");
        }
    },

    handleStoringScrollPosition() {
    localStorage.setItem("scrollPosition", window.pageYOffset);
    },
}


export default myFunctionsClass