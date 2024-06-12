import React, { useEffect, useState } from "react";
interface InputsProps {
  valD: number | null;
  valM: number | null;
  valY: number | null;
  setValD: React.Dispatch<React.SetStateAction<number | null>>;
  setValM: React.Dispatch<React.SetStateAction<number | null>>;
  setValY: React.Dispatch<React.SetStateAction<number | null>>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<number | null>>
  ) => void;
}

const Inputs = ({
  valD,
  valM,
  valY,
  setValD,
  setValM,
  setValY,
  handleInputChange,
}: InputsProps) => {
  const [errorD, setErrorD] = useState("");
  const [errorM, setErrorM] = useState("");
  const [errorY, setErrorY] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();

    if (valD && valD > 31) {
      setErrorD("Must be a valid day");
    } else setErrorD("");

    if (valM && valM > 12) {
      setErrorM("Must be a valid Month");
    } else setErrorM("");

    if (valY && valY > +year) {
      setErrorY("Must be in the past");
    } else setErrorY("");
  }, [valD, valM, valY]);
  return (
    <>
      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor={`DD`}
          className={`self-start text-md font-bold text-gray-500 tracking-[3px] ${
            errorD && "text-red-600"
          }`}
        >
          DAY
        </label>
        <input
          className={`text-xl font-extrabold rounded-lg border px-4 py-3 appearance-none focus:border-purple-600 active:border-purple-600 outline-none ${
            errorD &&
            "text-red-600 border-red-600 focus:border-red-600 active:border-red-600"
          }`}
          type="number"
          id="DD"
          placeholder="DD"
          value={valD ?? ""}
          onChange={(e) => handleInputChange(e, setValD)}
        />
        {errorD && <p className="text-red-600">{errorD}</p>}
      </div>

      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor="MM"
          className={`self-start text-md font-bold text-gray-500 tracking-[3px] ${
            errorM && "text-red-600"
          }`}
        >
          MONTH
        </label>
        <input
          className={`text-xl font-extrabold rounded-lg border px-4 py-3 appearance-none focus:border-purple-600 active:border-purple-600 outline-none ${
            errorM &&
            "text-red-600 border-red-600 focus:border-red-600 active:border-red-600"
          }`}
          type="number"
          id="MM"
          placeholder="MM"
          value={valM ?? ""}
          onChange={(e) => handleInputChange(e, setValM)}
        />
        {errorM && <p className="text-red-600">{errorM}</p>}
      </div>

      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor="YYYY"
          className={`self-start text-md font-bold text-gray-500 tracking-[3px] ${
            errorY && "text-red-600"
          }`}
        >
          YEAR
        </label>
        <input
          className={`text-xl font-extrabold rounded-lg border px-4 py-3 appearance-none focus:border-purple-600 active:border-purple-600 outline-none ${
            errorY &&
            "text-red-600 border-red-600 focus:border-red-600 active:border-red-600"
          }`}
          type="number"
          id="YYYY"
          placeholder="YYYY"
          value={valY ?? ""}
          onChange={(e) => handleInputChange(e, setValY)}
        />
        {errorY && <p className="text-red-600">{errorY}</p>}
      </div>
    </>
  );
};

export default Inputs;
