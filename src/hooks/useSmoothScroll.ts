import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useSmoothScroll = () => {
  useEffect(() => {
    const scrollEl = document.querySelector('[data-scroll-container]');
    
    if (!scrollEl) {
      console.warn('Scroll container not found');
      return;
    }

    const scroll = new LocomotiveScroll({
      el: scrollEl as HTMLElement,
      smooth: true,
      smoothMobile: false,
      multiplier: 1.0,
      lerp: 0.05,
      class: 'is-inview',
      smartphone: {
        smooth: false,
      },
      tablet: {
        smooth: false,
      },
      reloadOnContextChange: true,
      touchMultiplier: 2,
      firefoxMultiplier: 50,
    });

    console.log('✅ Locomotive Scroll initialized');

    const handleResize = () => {
      scroll.update();
    };

    window.addEventListener('resize', handleResize);

    // Handle anchor links
    const handleAnchorClick = (e: Event) => {
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (target && target.startsWith('#') && target !== '#') {
        e.preventDefault();
        scroll.scrollTo(target);
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Update on load
    window.addEventListener('load', () => {
      scroll.update();
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      anchorLinks.forEach((link) => {
        link.removeEventListener('click', handleAnchorClick);
      });
      scroll.destroy();
    };
  }, []);
};
