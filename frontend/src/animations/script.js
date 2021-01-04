import gsap, { Expo } from 'gsap';

export const animHomeBanniere = () => {
    var t1 = gsap.timeline();

    t1.to('.homeBanniereImg', {opacity:1, duration: 2, ease: Expo.easeInOut});
    t1.to('.homeBanniereTitle', {opacity: 1, duration: 0.5, ease: Expo.easeInOut});

    t1.play();
};

export const animListArtists = () => {
    var t2 = gsap.timeline();

    t2.from('.searchArtist', {duration: 1, ease: Expo.inOut, x: '-100%'});
    t2.from('.listArtists li', {duration: 1, ease: Expo.inOut, x: '-100%', stagger: 0.07});
    
    t2.play();
};

export const animEditionsFigures = () => {
    gsap.to('.editionFigure', {opacity: 1, scale: 1, duration: 1, ease: Expo.easeIn, stagger: 0.07});
};