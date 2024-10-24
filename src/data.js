import image1 from "./images/tour-1.jpeg";
import image2 from "./images/tour-2.jpeg";
import image3 from "./images/tour-3.jpeg";
import image4 from "./images/tour-4.jpeg";

export const pagelinks = [
    {id:1, href: "#home", text: "home"},
    {id:2, href: "#about", text: "about"},
    {id:3, href: "#services", text: "services"},
    {id:4, href: "#tours", text: "tours"}
]

export const sociallinks = [
    {id:1, href:"https://www.twitter.com", icon:"fab fa-facebook"},
    {id:1, href:"https://www.twitter.com", icon:"fab fa-twitter"},
    {id:1, href:"https://www.twitter.com", icon:"fab fa-squarespace"},
]   

export const services = [
    {id:1, icon:"fas fa-wallet fa-fw", title:"saving money", text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id:2, icon:"fas fa-tree fa-fw", title:"endless hiking", text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id:3, icon:"fas fa-socks fa-fw", title:"amazing comfort", text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
]

export const tours = [
    {id:1, image:image1, date:"august 26th, 2020", title:"Tibet Adventure", 
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"china",
    day: 6,
    price:2100},
    {id:2, image:image2, date:"october 1st, 2020", title:"best of java", 
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"indonesia",
    day: 11,
    price:1400},
    {id:3, image:image3, date:"september 15th, 2020", title:"explore hong kong", 
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"hong kong",
    day: 8,
    price:5000},
    {id:4, image:image4, date:"december 5th, 2019", title:"kenya highlights", 
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"kenya",
    day: 20,
    price:3300},
]