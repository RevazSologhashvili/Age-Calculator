import arrowIcon from "/icon-arrow.svg";

interface CalculateProps {
  handleCalculate: () => void;
}

const Calculate = ({ handleCalculate }: CalculateProps) => {
  return (
    <div className="my-8 relative flex justify-center items-center">
      {/* 1px height line */}
      <div className="h-[1px] bg-slate-300 w-full absolute top-1/2 transform -translate-y-1/2"></div>

      {/* Image button */}
      <img
        src={arrowIcon}
        alt="Arrow Icon"
        width={"auto"}
        height={"auto"}
        className="w-18 h-16 z-2 bg-purple-600 p-4 rounded-full relative hover:bg-black hover:cursor-pointer md:ml-auto"
        onClick={handleCalculate}
      />
    </div>
  );
};

export default Calculate;
