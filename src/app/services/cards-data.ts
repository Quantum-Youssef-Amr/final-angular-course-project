import { Injectable } from '@angular/core';
import { card } from '../types/card.type';

@Injectable({
  providedIn: 'root'
})

export class CardsData {
  homeLayoutCards: Array<card> = [
    {
      imageSrc: "assets/images/home-page-1.jpg",
      title: "Default",
      discraption: ""
    },
    {
      imageSrc: "assets/images/home-page-2.jpg",
      title: "Modern",
      discraption: ""
    },
    {
      imageSrc: "assets/images/home-page-3.jpg",
      title: "Creative",
      discraption: ""
    },
    {
      imageSrc: "assets/images/home-page-4.jpg",
      title: "Local Store",
      discraption: ""
    },
    {
      imageSrc: "assets/images/home-page-5.jpg",
      title: "Minimalist",
      discraption: ""
    },
    {
      imageSrc: "assets/images/homepage-coming-soon.jpg",
      title: "Coming Soon",
      discraption: ""
    }
  ]
  
  featuresCards: Array<card> = [
    {
      imageSrc: "assets/images/feature-1.png",
      title: "Mini Cart",
      discraption: "A \"mini cart\" is a design element commonly found in e-commerce websites and online shopping experiences. It provides a summarized view of the items a user has added to their shopping cart without redirecting them to a separate cart page."
    },
    {
      imageSrc: "assets/images/feature-2.png",
      title: "Quick view",
      discraption: "\"Quick view\" is a feature commonly implemented in e-commerce websites to provide users with a fast and convenient way to preview product details without leaving the current page."
    },
    {
      imageSrc: "assets/images/feature-3.png",
      title: "Filter / Sorting Options",
      discraption: "Filter options are crucial for helping users refine and narrow down their search or exploration of content on websites, particularly in e-commerce, product listings, and content-heavy platforms."
    },
    {
      imageSrc: "assets/images/feature-4.png",
      title: "Category Dropdown",
      discraption: ""
    },
    {
      imageSrc: "assets/images/feature-5.png",
      title: "Mega Menu",
      discraption: "A mega menu is a large, multi-column drop-down menu that typically displays a variety of options and information, providing an efficient and organized way to navigate through a website's content."
    }
  ]
  
  pageCards: Array<card> = [
    {
      imageSrc: "assets/images/shop-grid-filter.jpg",
      title: "Shop Grid - Filter",
      discraption: ""
    },
    {
      imageSrc: "assets/images/shop-list-filter.jpg",
      title: "Shop List Filter",
      discraption: ""
    },
    {
      imageSrc: "assets/images/shop-wide.jpg",
      title: "Shop Wide",
      discraption: ""
    }
  ]

  themes: Array<card> = [
    {
      imageSrc: "assets/images/logo-1.png",
      title: "Built with Next.js",
      discraption: "Every code snippet you ll get is written in Next.js React in a way that seamlessly integrates with UI."
    },
    {
      imageSrc: "assets/images/logo-2.png",
      title: "React Bootstrap",
      discraption: "The most popular front-end framework, rebuilt for React. React-Bootstrap replaces the Bootstrap JavaScript."
    },
    {
      imageSrc: "assets/images/logo-3.png",
      title: "SCSS Bootstrap",
      discraption: "Take advantage of variables, maps, mixins, and functions to help you build faster and customize your project."
    },
    {
      imageSrc: "assets/images/logo-4.png",
      title: "Admin Dashboard",
      discraption: "Download the Best Nextjs Admin Templates. Create your stunning and Beautiful web apps for the ecommerce store."
    },
    {
      imageSrc: "assets/images/logo-5.png",
      title: "Slick Carousel",
      discraption: "Slick is a responsive carousel that supports multiple breakpoints, CSS3 transitions, touch events/swiping & much more!"
    },
    {
      imageSrc: "assets/images/logo-6.png",
      title: "Well Documented",
      discraption: "We provide intuitive and detailed documentation, you will certainly master this template easily."
    },
    {
      imageSrc: "assets/images/logo-7.png",
      title: "High Performance",
      discraption: "Our coding standards ensures this theme is lighter and it will loads your site faster."
    },
    {
      imageSrc: "assets/images/logo-8.png",
      title: "Highly Customizable?",
      discraption: "Create something unique & beautifully tailored to your needs In only a couple minutes."
    },
    {
      imageSrc: "assets/images/logo-9.png",
      title: "Free Lifetime Updates",
      discraption: "We work hard every day to perfect the products. You will get it for free for a lifetime."
    },
  ];

}
