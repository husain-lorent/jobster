import React from "react";
import { useSelector } from "react-redux";
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";
import StatItem from "./StatItem";
const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <BiLineChart />,
      color: "#d66a6a",
      bcg: "#ffeee",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 rounded shadow-sm overflow-hidden">
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </div>
  );
};

export default StatsContainer;
