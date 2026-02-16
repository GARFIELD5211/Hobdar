import { useEffect } from 'react';
import './ClickSparks.css';

const ClickSparks = () => {
  useEffect(() => {
    let clickCount = 0;

    const handleClick = (e: MouseEvent) => {
      clickCount++;
      console.log(`💥 Click #${clickCount} at`, e.clientX, e.clientY);

      for (let i = 0; i < 8; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.left = `${e.clientX}px`;
        spark.style.top = `${e.clientY}px`;
        document.body.appendChild(spark);

        const angle = (Math.PI * 2 * i) / 8;
        const distance = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        let opacity = 1;
        let frame = 0;

        const animateSpark = () => {
          frame++;
          opacity -= 0.02;
          
          if (opacity <= 0 || frame > 30) {
            spark.remove();
            return;
          }

          spark.style.opacity = opacity.toString();
          spark.style.transform = `translate(${tx * (frame / 30)}px, ${ty * (frame / 30)}px) scale(${1 - frame / 30})`;
          requestAnimationFrame(animateSpark);
        };

        animateSpark();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default ClickSparks;
