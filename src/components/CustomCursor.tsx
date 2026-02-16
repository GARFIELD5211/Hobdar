import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.5;
      cursorY += (mouseY - cursorY) * 0.5;
      followerX += (cursorX - followerX) * 0.15;
      followerY += (cursorY - followerY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }

      if (followerRef.current) {
        followerRef.current.style.left = `${followerX}px`;
        followerRef.current.style.top = `${followerY}px`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animate);

    // Handle hover states for clickable elements
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '40px';
        cursorRef.current.style.height = '40px';
        cursorRef.current.style.opacity = '0.5';
      }
      if (followerRef.current) {
        followerRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '20px';
        cursorRef.current.style.height = '20px';
        cursorRef.current.style.opacity = '1';
      }
      if (followerRef.current) {
        followerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const clickableElements = document.querySelectorAll('a, button, .btn, input, textarea, select');
    clickableElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      clickableElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
};

export default CustomCursor;
