import React, { useState } from "react";
import { useSelector } from "react-redux";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <div className=" flex flex-col">
      <h4 className="text-center mt-5 mb-3 font-medium text-2xl">
        Month applications
      </h4>
      <button
        className="text-blue-600 font-semibold text-lg hover:text-blue-800 outline-none"
        type="button"
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
};

export default ChartsContainer;
