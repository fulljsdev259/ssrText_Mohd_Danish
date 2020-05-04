import React from "react";

export default function MeetupSection() {
  return (
    <article className="single-content">
      <div className="page-header-title single-post-title">Meetup</div>
      <ul>
        <li>
          <i className="fa fa-clock-o"></i>
          <span>April 13, 2019</span>
        </li>
        <li>
          <i className="fa fa-clock-o"></i>
          <a href='#'>Social</a>
        </li>
        <li>
          <i className="fa fa-clock-o"></i>
          <a href="#">Joefrey</a>
        </li>
        <li>
          <i className="fa fa-clock-o"></i>
          <a href="#">Bootstrap Templates</a>, <a href="#">Business</a>,{" "}
          <a href="#">Event</a>, <a href="#">One Page</a>
        </li>
        <li>
          <i className="fa fa-clock-o"></i>
          <a href="#">0 Comments</a>
        </li>
      </ul>
      <div className="meetup-img-wrapper">
        <img
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/meetup-free-template.jpg"
          alt="meetup free template"
        />
      </div>
    </article>
  );
}
