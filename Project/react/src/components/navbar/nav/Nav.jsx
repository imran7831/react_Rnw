import { useEffect, useRef } from "react";
import Logo from './Logo';
import Main from './Main';
import Search from './Search';

const Nav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add("fixed-nav");
      } else {
        navRef.current.classList.remove("fixed-nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={navRef} className="main d-flex">
      <Logo />
      <Main />
      <Search />
    </div>
  );
};

export default Nav;
