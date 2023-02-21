import React, {useEffect, useState} from 'react';
import "../css/NavigationBar.scss";

const NavigationBar = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    // console.log(scrollDirection);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);

  return (
    <div className={scrollDirection === 'down' ? 'down': 'up'}>
        <h1>Navigation Bar</h1>
        <p>Home</p>
    </div>
  )
}

export default NavigationBar