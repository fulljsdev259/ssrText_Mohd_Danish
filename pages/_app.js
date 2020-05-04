import React, { useEffect, useState } from "react";
import "../src/index.scss";
import useResize from "../src/components/hoc/resizer";
import { Provider } from "react-redux";
import store from "../src/redux/store";

export default function CustomApp(props) {
  const [isLoaded, setLoaded] = useState(false)
  const scrollY = useResize();

  function handle() {
    window.scrollTo(0, 0);
  }

  useEffect(()=>{
    //to get route props if user do hard reload
    setLoaded(true)
  },[])
    
  const { Component, ...restProps } = props;
  return (
    <>
      <div
        onClick={handle}
        className={`scroll-to-top ${scrollY > 5 ? "visible" : ""}`}
      >
        <i className="fa fa-chevron-up" />
      </div>
      {isLoaded &&
      <Provider store={store}>
        <Component {...restProps} />
      </Provider>}
    </>
  );
}

