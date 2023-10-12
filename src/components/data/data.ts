// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import MapApp from "../assets/mapApp.png";
import Youtube from "../assets/youtube.png";
import Twitter from "../assets/twitter.png";
import Spotify from "../assets/spotify.png";
import Gmail from "../assets/gmail.png";
import Recipe from "../assets/recipe.png";
import MovieApp from "../assets/movieApp.png";
// import NasaSpace from "../assets/nasaSpace.png";
// import RecibeApp from "../assets/recibeApp.png";
import Portfolio from "../assets/portfolio.png";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "React + TS Portfolio",
    img_url: `${Portfolio}`,
    link: "https://hilalportfolio.netlify.app/",
    gitHub: "https://github.com/hilaldeniz1/portfolio",
  },
  {
    id: 2,
    title: "React - Netflix Clone",
    img_url: `${MovieApp}`,
    link: "https://react-firebase-ecommerce-hooks.netlify.app",
    gitHub: "https://github.com/hilaldeniz1/netflix-film",
  },
  {
    id: 3,
    title: "React - Youtube Clone",
    img_url: `${Youtube}`,
    link: "",
    gitHub: "https://github.com/hilaldeniz1/react-youtube",
  },
  {
    id: 4,
    title: "React - X(Twitter) Clone",
    img_url: `${Twitter}`,
    link: "https://splendid-shortbread-0a50a4.netlify.app/auth.html",
    gitHub: "https://github.com/hilaldeniz1/twitter-clone",
  },
  {
    id: 5,
    title: "React - Spotify Clone",
    img_url: `${Spotify}`,
    link: "https://stunning-licorice-0b1705.netlify.app",
    gitHub: "https://github.com/hilaldeniz1/spotify-clone",
  },
  {
    id: 6,
    title: "JS - Gmail Clone",
    img_url: `${Gmail}`,
    link: "https://zippy-pavlova-cedbe8.netlify.app/",
    gitHub: "https://github.com/hilaldeniz1/gmail-clone",
  },

  {
    id: 7,
    title: "JS - Recipe APP",
    img_url: `${Recipe}`,
    link: "https://luminous-longma-3a91ac.netlify.app/",
    gitHub: "https://github.com/hilaldeniz1/food-app",
  },
  {
    id: 8,
    title: "JS | Map APP",
    img_url: `${MapApp}`,
    link: "https://amazing-daifuku-7da670.netlify.app//",
    gitHub: "https://github.com/hilaldeniz1/radar-toolkit",
  },

  // {
  //   id: 9,
  //   title: "React | NasaSpace APP",
  //   img_url: `${NasaSpace}`,
  //   link: "https://reactjs-nasa-app.netlify.app",
  //   gitHub: "",
  // },
  // {
  //   id: 10,
  //   title: "React | Recibe APP",
  //   img_url: `${RecibeApp}`,
  //   link: "https://reactjs-recibe-app.netlify.app",
  //   gitHub: "",
  // },
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
