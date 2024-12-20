import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="container faq-container mt-4">
        <h2 className="mb-3">Frequently Asked Questions (FAQ)</h2>
        <div className="accordion mb-5" id="faqAccordion">
          {/* FAQ 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How does the AI Medicine Recommendation System work?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="faqOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Our AI system uses advanced algorithms to analyze the symptoms
                you enter and provides personalized health recommendations.
                These include potential diagnoses, medication advice, and
                suggestions for lifestyle improvements such as workouts and
                diets. The system is trained on medical datasets to offer
                accurate predictions.
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Is the diagnosis from the system reliable?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="faqTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The system is built to provide reliable recommendations based on
                the symptoms entered. However, it is important to remember that
                the system is not a substitute for professional medical advice.
                Always consult a doctor for a confirmed diagnosis and
                personalized treatment.
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What symptoms can I enter into the system?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="faqThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can enter a wide range of symptoms, such as fever,
                headaches, dizziness, or skin rashes. A full list of supported
                symptoms is available on our <a href="./guide">Guide Page</a>.
                Simply enter the symptoms you are experiencing, and the system
                will analyze them to offer the most accurate recommendations.
              </div>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How secure is my data?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="faqFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We take data privacy and security very seriously. All data
                entered into the system is encrypted and stored securely. We
                follow strict guidelines to ensure that your health information
                is protected and never shared with third parties.
              </div>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Can I contact a human doctor through the system?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="faqFive"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                While our system provides AI-driven health recommendations, we
                do not offer direct consultations with doctors. However, we
                recommend that you consult with a healthcare professional for
                any serious or persistent health concerns.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="custom-container">
          <div className="container-wrapper">
            <div className="contact-info">
              <h4 className="mb-4">Contact Information</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> Superior College Mian
                Channu
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> Phone: +923060435245 ||
                +923156463904
              </p>
              <p>
                <i className="fas fa-envelope"></i> Email: ak126pk@gmail.com
              </p>
              <p>
                <i className="fas fa-globe"></i> Website: www.codewithali.info
              </p>

              <h4 className="mt-4">Get in touch with us!</h4>
              <p style={{ fontSize: "16px" }}>
                {" "}
                We're always here to provide answers.
              </p>

              <div className="social-media">
                <h6>Follow Us</h6>
                <Link to="https://www.facebook.com/ali.khalil.26/">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/ali-khalil-753469285/">
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link to="https://www.instagram.com/ali.khalil.26/?hl=en">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
