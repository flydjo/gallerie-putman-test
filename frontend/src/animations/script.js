import gsap, { Expo } from 'gsap';

export const animHomeBanniere = () => {
    var t1 = gsap.timeline();

    t1.to('.homeBanniereImg', {opacity:1, duration: 2, ease: Expo.easeInOut});
    t1.to('.homeBanniereTitle', {opacity: 1, duration: 0.5, ease: Expo.easeInOut});

    t1.play();
}

export const animImgArtists = () => {
    
}