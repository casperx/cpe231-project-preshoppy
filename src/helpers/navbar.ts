export const hideNavbar = () => {
    document.querySelector('.page-wrapper.with-navbar')?.classList.remove('with-navbar');
};

export const showNavbar = () => {
    document.querySelector('.page-wrapper')?.classList.add('with-navbar');
};
