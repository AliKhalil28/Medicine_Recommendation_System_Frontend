import React from 'react';

function Services() {
    return (
        <>
            {/* Header */}
            <h2 className="mt-3 text-center">Our Services</h2>
            <p className="lead text-center mt-2">
                <b>Discover our range of services designed to provide you with comprehensive health solutions through advanced AI technology.</b>
            </p>
            {/* Services Cards */}
            <div className="container mt-5 mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Card 1 */}
                    <div className="col">
                        <div className="card service-card text-center">
                            <div className="card-body">
                                <i className="fas fa-search fa-2x mb-3 text-primary"></i>
                                <h5 className="card-title">Symptom Checker</h5>
                                <p className="card-text">
                                    Enter your symptoms, and our AI-driven system will provide a list of possible conditions. It’s a quick and easy way to start understanding your health issues.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col">
                        <div className="card service-card text-center">
                            <div className="card-body">
                                <i className="fas fa-info-circle fa-2x mb-3 text-success"></i>
                                <h5 className="card-title">Disease Information</h5>
                                <p className="card-text">
                                    Get detailed descriptions of various diseases. Our system provides you with comprehensive information, including symptoms, causes, and treatments.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col">
                        <div className="card service-card text-center">
                            <div className="card-body">
                                <i className="fas fa-pills fa-2x mb-3 text-danger"></i>
                                <h5 className="card-title">Medication Suggestions</h5>
                                <p className="card-text">
                                    Based on your symptoms, receive suggestions for potential medications. We help you understand your options and the benefits of each treatment.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="col">
                        <div className="card service-card text-center">
                            <div className="card-body">
                                <i className="fas fa-dumbbell fa-2x mb-3 text-warning"></i>
                                <h5 className="card-title">Personalized Workouts</h5>
                                <p className="card-text">
                                    Our system provides workout recommendations tailored to your health conditions. Stay fit and manage your health with exercises suited to your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="col">
                        <div className="card service-card text-center">
                            <div className="card-body">
                                <i className="fas fa-apple-alt fa-2x mb-3 text-info"></i>
                                <h5 className="card-title">Customized Diet Plans</h5>
                                <p className="card-text">
                                    Receive personalized diet recommendations based on your health status. Our AI helps you make informed choices to maintain a balanced and healthy diet.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="col">
                        <div className="card service-card text-center">
                            <div className="card-body">
                                <i className="fas fa-user-md fa-2x mb-3 text-secondary"></i>
                                <h5 className="card-title">Virtual Consultations</h5>
                                <p className="card-text">
                                    Connect with healthcare professionals through our platform. Get expert advice and recommendations tailored to your health needs from the comfort of your home.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 7 */}
                    <div className="col">
                        <div className="card service-card text-center">
                            <div className="card-body">
                                <i className="fas fa-calendar-check fa-2x mb-3 text-dark"></i>
                                <h5 className="card-title">Health Tracking</h5>
                                <p className="card-text">
                                    Track your health progress over time with our system. Monitor symptoms, medications, and lifestyle changes to keep an accurate record of your health journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 8 */}
                    <div className="col">
                        <div className="card service-card text-center">
                            <div className="card-body">
                                <i className="fas fa-heartbeat fa-2x mb-3 text-primary"></i>
                                <h5 className="card-title">Wellness Monitoring</h5>
                                <p className="card-text">
                                    Receive alerts and tips for maintaining optimal wellness based on your health data. Our system helps you stay on top of your health and well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 9 */}
                    <div className="col">
                        <div className="card service-card text-center">
                            <div className="card-body">
                                <i className="fas fa-robot fa-2x mb-3 text-success"></i>
                                <h5 className="card-title">AI Insights</h5>
                                <p className="card-text">
                                    Get insights powered by advanced AI algorithms. Our system continuously learns and improves to provide you with accurate and up-to-date health information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
