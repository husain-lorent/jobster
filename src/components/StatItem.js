import React from "react";
const StatItem = ({ count, icon, title, color, bcg }) => {
  return (
    <div
      className="bg-white p-6"
    >
      <header className="flex justify-between items-center">
        <span className="lg:text-3xl text-xl font-bold text-blue-500">
          {count}
        </span>
        <span className="lg:text-3xl text-xl bg-yellow-200 text-blue-500 p-2 rounded">
          {icon}
        </span>
      </header>
      <h5 className="my-2 text-gray-8 text-xl font-semibold capitalize">
        {title}
      </h5>
    </div>
  );
};

export default StatItem;
