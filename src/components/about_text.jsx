import React, { Component } from "react";
class AboutText extends Component {
  state = {};
  render() {
    return (
      <div
        className="aboutText"
        className="wow slideInRight"
        data-wow-duration="1.0s"
        data-wow-delay="0.5s"
      >
        <h1>Lorem Ipsum</h1>
        <p className="aboutSubText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>

        <div className="contactIcons">
          <ul className="social-icons">
            <li>
              <div
                className="wow zoomIn"
                data-wow-duration="1.0s"
                data-wow-delay="0.5s"
              >
                <a
                  href="https://medium.com/@vidushiagarwal1997"
                  className="fa fa-medium"
                ></a>
              </div>
            </li>
            <li>
              <div
                className="wow zoomIn"
                data-wow-duration="1.0s"
                data-wow-delay="0.5s"
              >
                <a
                  href="https://www.linkedin.com/in/vidushi-agarwal-7b4b26142/"
                  className="fa fa-linkedin-square"
                ></a>
              </div>
            </li>

            <li>
              <div
                className="wow zoomIn"
                data-wow-duration="1.0s"
                data-wow-delay="0.5s"
              >
                <a
                  href="https://github.com/vidushi-agarwal"
                  className="fa fa-github"
                >
                  {" "}
                </a>
              </div>
            </li>

            <li>
              <div
                className="wow zoomIn"
                data-wow-duration="1.0s"
                data-wow-delay="0.5s"
              >
                <a
                  href="mail.google.com"
                  title="vidushiagarwal1997@gmail.com"
                  className="fa fa-envelope"
                ></a>
              </div>
            </li>

            <li>
              <div
                className="wow zoomIn"
                data-wow-duration="1.0s"
                data-wow-delay="0.5s"
              >
                <a
                  href="https://www.facebook.com/vidushi.agarwal.562"
                  className="fa fa-facebook-f"
                >
                  {" "}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AboutText;
