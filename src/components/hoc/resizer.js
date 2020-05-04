import React, { useEffect, useState } from "react";

export default function useResize() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  function handleResize() {
    setScrollY(window.scrollY);
  }
  return scrollY;
}
