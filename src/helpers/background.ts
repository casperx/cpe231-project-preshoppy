import BackgroundImage from 'assets/bg.jpg';

export const showBackground = () => {
    document.body.style.backgroundImage = `url(${BackgroundImage})`;
};

export const hideBackground = () => {
    document.body.style.backgroundImage = '';
};
