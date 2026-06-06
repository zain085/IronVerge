import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Oops! Please provide your height, weight, and gender to calculate your BMI.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

const numericBmi = parseFloat(bmiValue);

  if (numericBmi < 18.5) {
    toast.warning(
      `Your BMI is ${bmiValue}. You're in the Underweight category. It might be helpful to chat with a nutritionist about a balanced plan!`
    );
  } else if (numericBmi >= 18.5 && numericBmi < 24.9) {
    toast.success(
      `Great news! Your BMI is ${bmiValue}, which is a Healthy Weight. Keep up those awesome habits and stay active!`
    );
  } else if (numericBmi >= 25 && numericBmi < 29.9) {
    toast.warning(
      `Your BMI is ${bmiValue}. You're currently in the Overweight range. Small changes in activity and diet can make a big difference!`
    );
  } else {
    toast.error(
      `Your BMI is ${bmiValue}, placing you in the Obese category. We recommend consulting a healthcare professional for personalized health advice.`
    );
  }
  };
  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label htmlFor="height">Height (cm):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="weight">Weight (kg):</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="gender">Gender:</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="bmi.jpg" alt="BMI Information" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
