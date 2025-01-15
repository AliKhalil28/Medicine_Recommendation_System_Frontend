import React, { useCallback, useState } from "react";

const Home = (props) => {
  const [symptoms, setSymptoms] = useState("");
  const [predictedDisease, setPredictedDisease] = useState(null);
  const [disDes, setDisDes] = useState("");
  const [workout, setWorkout] = useState([]);
  const [myDiet, setMyDiet] = useState([]);
  const [medications, setMedications] = useState([]);
  const [myPrecautions, setMyPrecautions] = useState([]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the symptoms: convert to lowercase and replace spaces with underscores
    const formattedSymptoms = symptoms
      .toLowerCase()
      .trim()
      .replace(/\s*,\s*/g, ",")
      .replace(/ /g, "_");

    try {
      setPredictedDisease(null);
      props.loadingBarRef.current.continuousStart();
      props.setAlert({ msg: "Getting data from server...", type: "primary" });
      const response = await fetch(
        "https://medicine-recommendation-system-backend.onrender.com/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ symptoms: formattedSymptoms }),
        }
      );
      props.setAlert(null);

      if (!response.ok) {
        // If the response is not ok, show an alert with the error message
        props.showAlert(
          "Error: Incorrect symptoms or no valid response from the server. Please check your input.",
          "danger"
        );

        props.loadingBarRef.current.complete();
        return;
      }

      const data = await response.json();

      props.loadingBarRef.current.complete();
      props.showAlert("Success: Data loaded Sucessfully", "success");

      // Check if the response contains the necessary data
      if (data.error || !data.predicted_disease) {
        props.showAlert(
          "Error: Incorrect symptoms or no valid response from the server. Please check your input.",
          "danger"
        );
        props.loadingBarRef.current.complete();
        return;
      }

      // Set the data in the state if the response is successful
      setPredictedDisease(data.predicted_disease);
      setDisDes(data.dis_des);
      setWorkout(data.workout);
      setMyDiet(data.my_diet);
      setMedications(data.medications);
      setMyPrecautions(data.my_precautions);
    } catch (error) {
      // Handle network or other errors
      props.showAlert(
        "Error: Something went wrong. Please try again later.",
        "danger"
      );
      props.loadingBarRef.current.complete();
    }
  };

  return (
    <div>
      <h3 className="mt-4" style={{ textAlign: "center" }}>
        MedInsight - Medicine Recommendation System
      </h3>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10" style={{ marginBottom: "40px" }}>
            <div className="custom-container">
              <label className="mt-4 mb-2">Select symptoms:</label>
              <form onSubmit={handleSubmit} className="d-flex sysForm">
                <input
                  className="form-control me-4"
                  type="search"
                  id="symptoms"
                  name="symptoms"
                  placeholder="type symptoms such as itching, sleeping, aching etc."
                  aria-label="Search"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
                <div className="gap-2 mt-5 mb-3">
                  <button
                    className="btn btn-outline-primary"
                    style={{ backgroundColor: "#0C4A76", color: "azure" }}
                    type="submit"
                  >
                    Predict
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {predictedDisease && (
        <div>
          <h3 className="mt-5" style={{ textAlign: "center" }}>
            Predicted Results
          </h3>

          <div className="container my-4">
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column crd">
                    <h5 className="card-title text-center">Disease</h5>
                    <p>{predictedDisease}</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column crd">
                    <h5 className="card-title text-center">Description</h5>
                    <p>{disDes}</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column crd">
                    <h5 className="card-title text-center">Workouts</h5>
                    <ul>
                      {workout.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Card 4 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column crd">
                    <h5 className="card-title text-center">Diet Plans</h5>
                    <ul>
                      {myDiet.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column crd">
                    <h5 className="card-title text-center">Medications</h5>
                    <ul>
                      {medications.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column crd">
                    <h5 className="card-title text-center">Precautions</h5>
                    <ul>
                      {myPrecautions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
