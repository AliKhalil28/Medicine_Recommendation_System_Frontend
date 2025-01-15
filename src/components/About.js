import React from "react";
import sec1Image from "../images/sec1.webp";
import sec2Image from "../images/sec2.webp";
import sec3Image from "../images/sec3.jpg";

export default function About() {
  return (
    <>
      <h2 className="mt-3" style={{ textAlign: "center" }}>
        About Us
      </h2>
      <p className="lead text-center mt-2">
        <b>
          We are committed to delivering innovative healthcare solutions that
          prioritize your well-being, offering care and reliable medical advice.
        </b>
      </p>

      {/* Section 1 */}
      <div className="about-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={sec1Image}
                alt="About Us"
                className="about-image img-fluid w-100 h-100"
              />
            </div>
            <div className="col-md-6 about-text">
              <h5
                className="text-center"
                style={{ textDecoration: "underline" }}
              >
                Our Mission
              </h5>
              <p className="mt-3">
                At the core of our mission is the desire to revolutionize
                healthcare by leveraging cutting-edge technology to deliver
                innovative solutions. Our company has consistently been at the
                forefront of healthcare advancements, utilizing the power of
                artificial intelligence and data science to improve the
                accessibility and accuracy of medical knowledge. We are
                committed to empowering individuals by providing personalized
                health insights based solely on their symptoms, making it easier
                for them to understand and manage their health with confidence.
              </p>
              <p>
                Our platform simplifies complex medical information, providing
                accessible, reliable health advice for everyone. With AI-driven
                tools and expert insights, we offer personalized recommendations
                on symptoms, medication, workouts, and diet, ensuring precision
                and care.
              </p>
              <p>
                We believe that everyone deserves access to the best health
                resources, and we are constantly evolving to ensure our platform
                meets the highest standards of care and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img
                src={sec2Image}
                alt="About Us"
                className="about-image img-fluid"
              />
            </div>
            <div className="col-md-6 about-text order-md-1 mt-4">
              <h5
                className="text-center"
                style={{ textDecoration: "underline" }}
              >
                Our Team
              </h5>
              <p className="mt-3">
                At the heart of our AI-powered healthcare system is a passionate
                and dedicated team of professionals who are driven by a singular
                goal: to revolutionize healthcare accessibility. Our team
                consists of skilled AI developers, experienced medical experts,
                and visionary tech enthusiasts, all working collaboratively to
                ensure that our system delivers accurate and reliable
                recommendations.
              </p>
              <p>
                Each team member brings a wealth of knowledge and expertise from
                their respective fields, allowing us to merge cutting-edge
                technology with deep medical insights. Together, we are
                committed to improving lives by empowering individuals with the
                tools and knowledge they need to take control of their health.
              </p>
              <p>
                Our team’s dedication to innovation, precision, and user
                experience is what sets us apart in the world of healthcare
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="about-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={sec3Image}
                alt="About Us"
                className="about-image img-fluid"
                style={{ height: "340px" }}
              />
            </div>
            <div className="col-md-6 about-text">
              <h5
                className="text-center"
                style={{ textDecoration: "underline" }}
              >
                Our Vision
              </h5>
              <p className="mt-3">
                Our vision is to revolutionize healthcare by harnessing the
                power of artificial intelligence to provide accurate,
                personalized health recommendations. We aspire to be a leading
                force in making high-quality healthcare accessible to everyone,
                regardless of their location or background. By integrating
                advanced technology with compassionate care, we aim to improve
                health outcomes and enhance the quality of life for individuals
                worldwide.
              </p>
              <p>
                We are dedicated to innovation, striving to stay ahead in health
                technology. Our goal is to offer a seamless experience with
                tailored health insights and actionable recommendations,
                envisioning a future where technology and healthcare enhance
                efficiency and effectiveness.
              </p>
              <p>
                Our team ensures our solutions are advanced yet user-friendly,
                combining tech excellence with great user experience to empower
                health management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
