import React from "react";
import Header from "../src/components/generic/Header";
import PageSection from "../src/components/PageSection";
import GenericTextInput from "../src/components/generic/GenericTextInput";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function ContactUs(props) {
  const categories = useSelector((state) => state.categories.categoryData);
  const router = useRouter();

  if (!categories.isSuccess) {
    router.push("/");
  }

  return (
    <div className="contact-us">
      <Header route={props.router.route} categories={categories.data} />
      <PageSection />
      <div className="form-wrapper">
        <div>
          <h2>Please note:</h2>
          <span>
            Please don’t contact us for theme support related questions as they
            will be ignored. Use our <a href="#">Support Forum</a> .
          </span>
          <GenericTextInput />
          <GenericTextInput />
          <GenericTextInput />
          <GenericTextInput />
          <GenericTextInput />
          <div className="text-area-container">
            <span>
              Your Message (Support requests won't be answered. For that use our{" "}
              <a href="#">support forum</a>.)
            </span>
            <br />
            <textarea cols="40" rows="10" className="message-text-area" />
            <div className="attach-file">
              Attach file (translation files, screenshot, etc)
            </div>
            <input className="file-type" type="file" />
            <br></br>
            <input className="submit-btn" type="submit" value="Send" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

ContactUs.getInitialProps = async (ctx) => {
  return {};
};
