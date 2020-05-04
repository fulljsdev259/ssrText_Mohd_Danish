import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header({ route, categories = false }) {
  const [scrollY, setScrollY] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  //function to add class to header to change their behaviour
  function handleResize() {
    if (window.scrollY > 0) {
      setScrollY("sticky");
    } else {
      setScrollY("");
    }
    if (window.scrollY > 100) {
      setScrollY("sticky small");
    }
  }

  return (
    <header className={`shrink-sticky-header ${scrollY}`}>
      <div className="wrapper">
        <div>
          <img
            className="logo-img"
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png"
            alt="Colorlib"
          />
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">
                <a className={`${route === "/" && "active"}`}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/contactus">
                <a className={`${route === "/contactus" && "active"}`}>Contact Us</a>
              </Link>
            </li>
            <li>
              <a className={categories ? "dropdown-item" : ""}>Free Themes </a>
              <ul className="dropdown">
                {categories &&
                  categories.length > 0 &&
                  categories.map((item) => (
                    <li>
                      <a className="item-name" href="#">
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <a>Premium Themes</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              {" "}
              <a>
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-search"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
