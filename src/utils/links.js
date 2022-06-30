import { MdQueryStats } from "react-icons/md";
import { MdOutlineAddchart } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoStatsChartSharp } from "react-icons/io5";
const links = [
  { id: 1, text: "Stats", path: "/", icon: <IoStatsChartSharp /> },
  { id: 2, text: "All Jobs", path: "/all-jobs", icon: <MdQueryStats /> },
  { id: 3, text: "Add Job", path: "/add-job", icon: <MdOutlineAddchart /> },
  { id: 4, text: "Profile", path: "/profile", icon: <ImProfile /> },
];

export default links;
