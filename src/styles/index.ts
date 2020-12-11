import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* IBM Plex (Latin): 400R */
    @font-face {
        font-family: "IBM Plex Sans";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Regular.ttf")
            format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    /* IBM Plex (Latin): 700R */
    @font-face {
        font-family: "IBM Plex Sans";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Bold.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Bold.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Bold.ttf")
            format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    /* IBM Plex (Thai): 300R */
    @font-face {
        font-family: "IBM Plex Sans Thai";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff2/IBMPlexSansThai-Light.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff/IBMPlexSansThai-Light.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/ttf/IBMPlexSansThai-Light.ttf")
            format("truetype");
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    /* IBM Plex (Thai): 400R */
    @font-face {
        font-family: "IBM Plex Sans Thai";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff2/IBMPlexSansThai-Regular.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff/IBMPlexSansThai-Regular.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/ttf/IBMPlexSansThai-Regular.ttf")
            format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    /* IBM Plex (Thai): 500R */
    @font-face {
        font-family: "IBM Plex Sans Thai Medium";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff2/IBMPlexSansThai-Medium.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff/IBMPlexSansThai-Medium.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/ttf/IBMPlexSansThai-Medium.ttf")
            format("truetype");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    /* IBM Plex (Thai): 700R */
    @font-face {
    font-family: "IBM Plex Sans Thai";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff2/IBMPlexSansThai-Bold.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff/IBMPlexSansThai-Bold.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/ttf/IBMPlexSansThai-Bold.ttf")
            format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    :root {
        /* --primary-color-very-light: #F9CF25;
        --primary-color-light: #FBA433; */
        --primary-color-very-light: #fc823e;
        --primary-color-light: #fd7244;
        --primary-color: #FE604A;
        --primary-color-dark: #D54143;
        --primary-color-very-dark: #A13132;
        --primary-box-shadow-color: #fe604a4d;
        --primary-box-shadow-color-darker: #fe604a99;
        --card-title-font-weight: 700;
        --navbar-brand-image-height: 3rem;
        --navbar-brand-image-margin-right: 0;
        --lm-navbar-bg-image: linear-gradient(89.65deg, #D54143 0%, #FE604A 100%);
        --lm-navbar-bg-color: #FE604A;
        --lm-button-primary-bg-image: linear-gradient(89.65deg, #FE604A 0%, #fd7244 100%);
        --lm-button-primary-bg-image-hover: linear-gradient(89.65deg, #fd7244 0%, #fc823e 100%);
        --navbar-border-width: 0;
        --lm-navbar-box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        --lm-navbar-link-text-color: white;
        --lm-navbar-link-text-color-hover: white;
        --lm-navbar-link-active-text-color: white;
        --lm-navbar-link-active-text-color-hover: white;
        --heading-font-weight: 700;
        --content-and-card-spacing: 1rem;
        --content-title-font-weight: 700;
        --modal-content-width: 80rem;
        --modal-title-font-size: 3rem;
    }

    .nav-link:hover,
    .nav-item.active>.nav-link {
        text-decoration: underline;
    }

    html {
       scroll-behavior: smooth;
    }

    body {
        font-family: 'IBM Plex Sans Thai', 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        min-height: 100vh;
        margin: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
    }

    a:not(.nav-link):not(.dropdown-item):not(.btn) {
        text-decoration: underline;
    }

    .content-wrapper {
        padding-bottom: 2rem;
    }

    .content-wrapper>.container {
        min-height: calc(100vh - var(--navbar-height));
    }

    nav.navbar {
        @media (min-width: 577px){
            padding-left: calc((100% - var(--container-sm-max-width)) / 2);
            padding-right: calc((100% - var(--container-sm-max-width)) / 2);
        }
        @media (min-width: 769px){
            padding-left: calc((100% - var(--container-md-max-width)) / 2);
            padding-right: calc((100% - var(--container-md-max-width)) / 2);
        }
        @media (min-width: 993px){
            padding-left: calc((100% - var(--container-lg-max-width)) / 2);
            padding-right: calc((100% - var(--container-lg-max-width)) / 2);
        }
        @media (min-width: 1201px){
            padding-left: calc((100% - var(--container-xl-max-width)) / 2);
            padding-right: calc((100% - var(--container-xl-max-width)) / 2);
        }
    }

    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity .5s;
    }

    .ReactModal__Overlay--after-open{
        opacity: 1;
    }

    .ReactModal__Overlay--before-close{
        opacity: 0;
    }
`;
