import React, { useState } from "react";
import Calculate from "./components/Calculate";
import Inputs from "./components/Inputs";
import ShowAge from "./components/ShowAge";

function App() {
  const [valD, setValD] = useState<number | null>(null);
  const [valM, setValM] = useState<number | null>(null);
  const [valY, setValY] = useState<number | null>(null);

  const [CvalD, setCValD] = useState<number | null>(null);
  const [CvalM, setCValM] = useState<number | null>(null);
  const [CvalY, setCValY] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    const inputValue = parseInt(e.target.value, 10);
    setValue(isNaN(inputValue) ? null : inputValue);
  };

  const handleCalculate = () => {
    const year = new Date().getFullYear();

    if ((valD && valD > 31) || (valM && valM > 12) || (valY && valY > year))
      return;
    else if (valY && valY <= year && valM && valM <= 12 && valD && valD <= 31) {
      const birthDate = new Date(valY, valM - 1, valD);
      const currentDate = new Date();

      let years = currentDate.getFullYear() - birthDate.getFullYear();
      let months = currentDate.getMonth() - birthDate.getMonth();
      let days = currentDate.getDate() - birthDate.getDate();

      // If the current month is less than the birth month, or if they're the same but the current day is less than the birth day, adjust the age
      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        years--;
        months = 12 - (birthDate.getMonth() - currentDate.getMonth());
        if (currentDate.getDate() < birthDate.getDate()) {
          months--;
        }
      }

      // If the days are negative, adjust the months and days
      if (days < 0) {
        months--;
        const tempDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        );
        days = tempDate.getDate() - birthDate.getDate() + currentDate.getDate();
      }

      setCValY(years);
      setCValD(days);
      setCValM(months);

      console.log(years, " ", months, " ", days);
    }
  };

  return (
    <div className="mx-4 mt-20 px-6 py-12 rounded-3xl rounded-br-[100px] bg-white md:max-w-[840px] md:mx-auto md:p-16">
      <div className="grid grid-cols-3 gap-4">
        <Inputs
          valD={valD}
          valM={valM}
          valY={valY}
          setValD={setValD}
          setValM={setValM}
          setValY={setValY}
          handleInputChange={handleInputChange}
        />
      </div>
      <Calculate handleCalculate={handleCalculate} />
      <ShowAge day={CvalD} month={CvalM} year={CvalY} />
    </div>
  );
}

export default App;
