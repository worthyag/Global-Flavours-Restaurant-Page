// Importing the images
import box1 from './assets/box-1.jpg';
import box2 from './assets/box-2.jpg';
import box3 from './assets/box-3.jpg';
import box4 from './assets/box-4.jpg';
import box5 from './assets/box-5.jpg';
import box6 from './assets/box-6.jpg';

import menu1 from './assets/menu-1.jpg';
import menu2 from './assets/menu-2.jpg';
import menu3 from './assets/menu-3.jpg';
import menu4 from './assets/menu-4.jpg';
import menu5 from './assets/menu-5.jpg';
import menu6 from './assets/menu-6.jpg';
import menu7 from './assets/menu-7.jpg';
import menu8 from './assets/menu-8.jpg';
import menu9 from './assets/menu-9.jpg';
import menu10 from './assets/menu-10.jpg';
import menu11 from './assets/menu-11.jpg';
import menu12 from './assets/menu-12.jpg';
import menu13 from './assets/menu-13.jpg';
import menu14 from './assets/menu-14.jpg';
import menu15 from './assets/menu-15.jpg';
import menu16 from './assets/menu-16.jpg';

// Importing the icons
import logo from './assets/logo.svg';
import logoWhite from './assets/logo-white.svg';
import instagramIcon from './assets/instagram-icon.svg';
import twitterIcon from './assets/twitter-icon.svg';
import ytIcon from './assets/youtube-icon.svg';
import fbIcon from './assets/facebook-icon.svg';
import githubIcon from './assets/github-icon.svg';

function addSrc(element, src) {
    element.src = src;
}


function generateAssets() {
    // Logos
    const logoImg = document.querySelectorAll('.logo-img');

    for (let i = 0; i < logoImg.length; i++) {
        logoImg[i].src = logo;
    }

    const logoWhiteImg = document.querySelectorAll('.logo-white-img');

    for (let i = 0; i < logoWhiteImg.length; i++) {
        logoWhiteImg[i].src = logoWhite;
    }

    // Boxes
    addSrc(document.getElementById('box-1'), box1);
    addSrc(document.getElementById('box-2'), box2);
    addSrc(document.getElementById('box-3'), box3);
    addSrc(document.getElementById('box-4'), box4);
    addSrc(document.getElementById('box-5'), box5);
    addSrc(document.getElementById('box-6'), box6);

    // Menu Items
    addSrc(document.getElementById('menu-1'), menu1);
    addSrc(document.getElementById('menu-2'), menu2);
    addSrc(document.getElementById('menu-3'), menu3);
    addSrc(document.getElementById('menu-4'), menu4);
    addSrc(document.getElementById('menu-5'), menu5);
    addSrc(document.getElementById('menu-6'), menu6);
    addSrc(document.getElementById('menu-7'), menu7);
    addSrc(document.getElementById('menu-8'), menu8);
    addSrc(document.getElementById('menu-9'), menu9);
    addSrc(document.getElementById('menu-10'), menu10);
    addSrc(document.getElementById('menu-11'), menu11);
    addSrc(document.getElementById('menu-12'), menu12);
    addSrc(document.getElementById('menu-13'), menu13);
    addSrc(document.getElementById('menu-14'), menu14);
    addSrc(document.getElementById('menu-15'), menu15);
    addSrc(document.getElementById('menu-16'), menu16);

    // Icons
    addSrc(document.getElementById('instagram'), instagramIcon);
    addSrc(document.getElementById('twitter'), twitterIcon);
    addSrc(document.getElementById('youtube'), ytIcon);
    addSrc(document.getElementById('facebook'), fbIcon);

    

    for (let img of document.querySelectorAll('.github')) {
        img.src = githubIcon;
    }
}

export default generateAssets;