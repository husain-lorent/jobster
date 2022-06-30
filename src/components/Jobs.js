import moment from "moment";
import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteJob, setEditJob } from "../features/job/jobSlice";
import JobInfo from "./JobInfo";
const Jobs = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();

  const date = moment(createdAt).format("MMM Do, YYYY");
  return (
    <div className="bg-white shadow-lg overflow-auto hover:drop-shadow-xl rounded-sm">
      <section className="p-5">
        <header className="flex m-2">
          <div className="bg-blue-500 py-4 px-6 capitalize rounded h-full text-center items-center font-bold text-xl text-white">
            {company.charAt(0)}
          </div>
          <div className="ml-7">
            <h5 className="mb-2 text-black font-medium text-xl capitalize">
              {position}
            </h5>
            <p className="mb-2 text-gray-600 font-medium text-lg capitalize">
              {company}
            </p>
          </div>
        </header>
        <hr className="border-gray-400 mb-3" />
        <div className="items-center">
          <div className="grid grid-cols-2">
            <JobInfo icon={<MdLocationOn />} text={jobLocation} />
            <JobInfo icon={<FaCalendarAlt />} text={date} />
            <JobInfo icon={<FaBriefcase />} text={jobType} />
            <div className="text-yellow-600 text-lg font-semibold capitalize ">
              {status}
            </div>
          </div>
          <footer className="mt-2">
            <div>
              <Link
                className="bg-blue-500 text-white font-medium py-1 px-3 rounded hover:bg-blue-600"
                to="/add-job"
                onClick={() =>
                  dispatch(
                    setEditJob({
                      editJobId: _id,
                      position,
                      company,
                      jobLocation,
                      jobType,
                      status,
                    })
                  )
                }
              >
                Edit
              </Link>
              <button
                className="bg-pink-400 ml-4 text-white font-medium py-[2px] px-3 rounded hover:bg-pink-500"
                type="button"
                onClick={() => dispatch(deleteJob(_id))}
              >
                Delete
              </button>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
