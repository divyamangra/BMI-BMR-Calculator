import "./App.css";
import { useState } from "react";

function App() {
  const [units, setUnit] = useState([]);
  const [sex, setSex] = useState([]);
  const [age, setAge] = useState();
  let [weight, setWeight] = useState();
  let [height, setHeight] = useState();
  let [BMI, setBmi] = useState();
  let [range, setRange] = useState();
  let [BMR, setBmr] = useState();
  // let [emoji, setEmoji] = useState();
  let weightunit, heightunit;
  if (units === "Metric Units") {
    // BMI = (10000 * weight) / (height * height);
    weightunit = "(in kg)";
    heightunit = "(in cm)";
  } else if (units === "US Units") {
    // BMI = (703 * weight) / (height * height);
    weightunit = "(in pounds)";
    heightunit = "(in inches)";
  }
  let s;
  function calculateBMI() {
    if (units === "Metric Units") {
      BMI = (10000 * weight) / (height * height);
    } else if (units === "US Units") {
      BMI = (703 * weight) / (height * height);
    }
    BMI = BMI.toFixed(4);
    setBmi(`BMI=${BMI}`);
    if (BMI < 18.5) {
      setRange(
        "You appear to be UnderWeight, I think its time to start excercising and controlling diet"
      );
    } else if (BMI >= 18.5 && BMI <= 25) {
      setRange("You appear to be in Normal Range, Keep up the good work");
    } else if (BMI > 25 && BMI <= 30) {
      setRange(
        "You appear to be OverWeight, I think its time to start excercising and controlling diet"
      );
    } else if (BMI > 30) {
      setRange(
        "You appear to be Obese, I think its time to start excercising and controlling diet"
      );
    }

    if (sex === "Male") {
      s = 5;
    } else if (sex === "Female") {
      s = -161;
    }
    if (units === "US Units") {
      weight = weight * 0.453592;
      height = height * 2.54;
    }
    BMR = 10 * weight + 6.25 * height - 5 * age + s;
    setBmr(`BMR=${BMR}`);
  }

  return (
    <div className="App">
      <div className="Header">
        BMI & BMR Calculator
        <br />
        <br />
      </div>
      <div className="Units">
        <label>Units</label>
        <input
          type="radio"
          name="units"
          value="US Units"
          onClick={e => setUnit(e.target.value)}
        ></input>
        US Units
        <input
          type="radio"
          name="units"
          value="Metric Units"
          onClick={e => setUnit(e.target.value)}
        ></input>
        Metrics
      </div>
      <br />
      <div className="Age">
        <label>Age:</label>
        <input type="text" onChange={e => setAge(e.target.value)}></input>
      </div>
      <br />
      <div className="Sex">
        <label>Sex:</label>
        <input
          type="radio"
          name="sex"
          value="Male"
          onClick={e => setSex(e.target.value)}
        ></input>
        Male
        <input
          type="radio"
          name="sex"
          value="Female"
          onClick={e => setSex(e.target.value)}
        ></input>
        Female
      </div>
      <br />
      <div className="Weight">
        <label>Weight:{weightunit}</label>
        <input type="text" onChange={e => setWeight(e.target.value)}></input>
      </div>
      <br />
      <div className="Height">
        <label>Height:{heightunit}</label>
        <input type="text" onChange={e => setHeight(e.target.value)}></input>
      </div>
      <br />
      <br />
      <div className="Calculate">
        <button onClick={calculateBMI}>Calculate BMI & BMR </button>
        {/* <button onClick={calculateBMR}>Calculate BMR </button> */}
      </div>
      <br />
      <div className="Bmi">{BMI}</div>
      <div className="Range">{range}</div>
      <div className="BMR">{BMR}</div>
      <br />
      <br />

      <div className="Warning">
        <p>
          This calculator is for informational purposes only. Consult a
          healthcare provider before making health decisions. BMI is an indirect
          assessment of health risk and may not be accurate because it cannot
          determine the proportion or distribution of body fat. Mifflin-St Jeor
          equation is used for calculaing the BMR.
        </p>
      </div>
    </div>
  );
}

export default App;
