import React, {useEffect} from "react";
import Header from "../src/components/generic/Header";
import MeetupSection from "../src/components/MeetupSection";
import PageSection from "../src/components/PageSection";
import { useDispatch, useSelector } from "react-redux";
import { categoryRequest } from "../src/redux/actions";

export default function HomePage(props) {
  const categories = useSelector(state=> state.categories.categoryData)  
  const dispatch = useDispatch();

  useEffect(() => {
    if(!categories.isSuccess){
      getCategory();
    }
  }, []);

  async function getCategory() {    
    const res = await fetch(
      "https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories"
    );
    const categories = await res.json();
    dispatch(categoryRequest(categories.data))
  }

  return (
    <div className="home-page">
      <Header route={props.router.route} />
      <PageSection />
      <MeetupSection />
    </div>
  );
}

HomePage.getInitialProps = async (ctx) => {
  return {};
};
