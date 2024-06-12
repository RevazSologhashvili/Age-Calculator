const ShowAge = (props: {
  day: number | null;
  month: number | null;
  year: number | null;
}) => {
  return (
    <div>
      <h1 className="font-extrabold text-6xl italic md:text-7xl">
        <p className="text-purple-600 mb-3">
          {props.year != null && props.year >= 0
            ? props.year + " "
            : props.year === 0
            ? "0 "
            : "-- "}
          <span className="text-black">years</span>
        </p>
        <p className="text-purple-600 mb-3">
          {props.month != null && props.month >= 0
            ? props.month + " "
            : props.month === 0
            ? "0 "
            : "-- "}
          <span className="text-black">months</span>
        </p>
        <p className="text-purple-600 mb-3">
          {props.day != null && props.day >= 0
            ? props.day + " "
            : props.day === 0
            ? "0 "
            : "-- "}
          <span className="text-black">days</span>
        </p>
      </h1>
    </div>
  );
};

export default ShowAge;
