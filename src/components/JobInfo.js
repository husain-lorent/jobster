import React from "react";

const JobInfo = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      <span className="my-2 mr-3 text-lg text-gray-500 ">{icon}</span>
      <span className="my-2 text-gray-900 font-medium capitalize">{text}</span>
    </div>
  );
};

export default JobInfo;
