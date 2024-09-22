import React from 'react'

export default function Guide() {
  return (
    <>
     <div className="container mt-4">
        
        <h2 className="text-center">How to Use the AI Medicine Recommendation System</h2>

        
        <p className="guide-description">
            Our AI-based system allows you to input your symptoms and provides a diagnosis with suggested precautions,
            medications, workouts, and diet. Simply enter the symptoms you're experiencing in the search area on home
            page, and our
            system will analyze the data to offer the most accurate health recommendations for you.
        </p>

        
        <div className="table-container mt-0">
            <h4 className="text-center">Symptoms You Can Enter</h4>
            <p className="text-center mt-2">Below are some of the symptoms you can use to get a diagnosis. Simply enter the
                symptoms in Medicine Recommendation System search area to get started.</p>

            
            <div className="table-responsive mb-3">
                <table className="table table-striped table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Symptoms</th>
                            <th>Symptoms</th>
                            <th>Symptoms</th>
                            <th>Symptoms</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>abdominal_pain</td>
                            <td>abnormal_menstruation</td>
                            <td>acidity</td>
                            <td>acute_liver_failure</td>
                        </tr>
                        <tr>
                            <td>altered_sensorium</td>
                            <td>anxiety</td>
                            <td>back_pain</td>
                            <td>belly_pain</td>
                        </tr>
                        <tr>
                            <td>blackheads</td>
                            <td>bladder_discomfort</td>
                            <td>blister</td>
                            <td>blood_in_sputum</td>
                        </tr>
                        <tr>
                            <td>bloody_stool</td>
                            <td>blurred_and_distorted_vision</td>
                            <td>brittle_nails</td>
                            <td>bruising</td>
                        </tr>
                        <tr>
                            <td>burning_micturition</td>
                            <td>chest_pain</td>
                            <td>chills</td>
                            <td>coma</td>
                        </tr>
                        <tr>
                            <td>congestion</td>
                            <td>constipation</td>
                            <td>continuous_feel_of_urine</td>
                            <td>continuous_sneezing</td>
                        </tr>
                        <tr>
                            <td>cramps</td>
                            <td>cough</td>
                            <td>dark_urine</td>
                            <td>dehydration</td>
                        </tr>
                        <tr>
                            <td>depression</td>
                            <td>diarrhoea</td>
                            <td>dischromic_patches</td>
                            <td>distention_of_abdomen</td>
                        </tr>
                        <tr>
                            <td>dizziness</td>
                            <td>drying_and_tingling_lips</td>
                            <td>enlarged_thyroid</td>
                            <td>excessive_hunger</td>
                        </tr>
                        <tr>
                            <td>extra_marital_contacts</td>
                            <td>family_history</td>
                            <td>fast_heart_rate</td>
                            <td>fatigue</td>
                        </tr>
                        <tr>
                            <td>fluid_overload</td>
                            <td>fluid_overload.1</td>
                            <td>foul_smell_of_urine</td>
                            <td>headache</td>
                        </tr>
                        <tr>
                            <td>high_fever</td>
                            <td>hip_joint_pain</td>
                            <td>history_of_alcohol_consumption</td>
                            <td>indigestion</td>
                        </tr>
                        <tr>
                            <td>increased_appetite</td>
                            <td>inflammatory_nails</td>
                            <td>internal_itching</td>
                            <td>irregular_sugar_level</td>
                        </tr>
                        <tr>
                            <td>irritability</td>
                            <td>irritation_in_anus</td>
                            <td>itching</td>
                            <td>joint_pain</td>
                        </tr>
                        <tr>
                            <td>knee_pain</td>
                            <td>lack_of_concentration</td>
                            <td>lethargy</td>
                            <td>loss_of_appetite</td>
                        </tr>
                        <tr>
                            <td>loss_of_balance</td>
                            <td>loss_of_smell</td>
                            <td>malaise</td>
                            <td>mild_fever</td>
                        </tr>
                        <tr>
                            <td>mood_swings</td>
                            <td>movement_stiffness</td>
                            <td>mucoid_sputum</td>
                            <td>muscle_pain</td>
                        </tr>
                        <tr>
                            <td>muscle_wasting</td>
                            <td>muscle_weakness</td>
                            <td>nausea</td>
                            <td>neck_pain</td>
                        </tr>
                        <tr>
                            <td>nodal_skin_eruptions</td>
                            <td>obesity</td>
                            <td>pain_behind_the_eyes</td>
                            <td>pain_during_bowel_movements</td>
                        </tr>
                        <tr>
                            <td>pain_in_anal_region</td>
                            <td>painful_walking</td>
                            <td>palpitations</td>
                            <td>passage_of_gases</td>
                        </tr>
                        <tr>
                            <td>patches_in_throat</td>
                            <td>phlegm</td>
                            <td>polyuria</td>
                            <td>prominent_veins_on_calf</td>
                        </tr>
                        <tr>
                            <td>puffy_face_and_eyes</td>
                            <td>pus_filled_pimples</td>
                            <td>receiving_blood_transfusion</td>
                            <td>receiving_unsterile_injections</td>
                        </tr>
                        <tr>
                            <td>red_sore_around_nose</td>
                            <td>red_spots_over_body</td>
                            <td>redness_of_eyes</td>
                            <td>restlessness</td>
                        </tr>
                        <tr>
                            <td>runny_nose</td>
                            <td>rusty_sputum</td>
                            <td>scurring</td>
                            <td>shivering</td>
                        </tr>
                        <tr>
                            <td>silver_like_dusting</td>
                            <td>sinus_pressure</td>
                            <td>skin_peeling</td>
                            <td>skin_rash</td>
                        </tr>
                        <tr>
                            <td>slurred_speech</td>
                            <td>small_dents_in_nails</td>
                            <td>spinning_movements</td>
                            <td>spotting_urination</td>
                        </tr>
                        <tr>
                            <td>stiff_neck</td>
                            <td>stomach_bleeding</td>
                            <td>stomach_pain</td>
                            <td>sunken_eyes</td>
                        </tr>
                        <tr>
                            <td>sweating</td>
                            <td>swelled_lymph_nodes</td>
                            <td>swelling_joints</td>
                            <td>swelling_of_stomach</td>
                        </tr>
                        <tr>
                            <td>swollen_blood_vessels</td>
                            <td>swollen_extremeties</td>
                            <td>swollen_legs</td>
                            <td>throat_irritation</td>
                        </tr>
                        <tr>
                            <td>toxic_look_(typhos)</td>
                            <td>ulcers_on_tongue</td>
                            <td>unsteadiness</td>
                            <td>visual_disturbances</td>
                        </tr>
                        <tr>
                            <td>vomiting</td>
                            <td>watering_from_eyes</td>
                            <td>weakness_in_limbs</td>
                            <td>weakness_of_one_body_side</td>
                        </tr>
                        <tr>
                            <td>weight_gain</td>
                            <td>weight_loss</td>
                            <td>yellow_crust_ooze</td>
                            <td>yellow_urine</td>
                        </tr>
                        <tr>
                            <td>yellowing_of_eyes</td>
                            <td>yellowish_skin</td>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    </div>
    </>
  )
}
